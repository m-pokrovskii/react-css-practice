import React from 'react'
import { useEffect, useState } from "react";
import Suggestions from './suggestions';
import './index.css';
export default function SearchAutocomplete() {
	const [searchParam, setSearchParam] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [users, setUsers] = useState([])	
	const [suggestedUsers, setSuggestedUsers] = useState([])	
	const [showSuggestions, setShowSuggestions] = useState(false);
	
	function handleSAChange(e) {
		const value = e.target.value.toLowerCase();
		setSearchParam(e.target.value);
		if (value.length > 1) {
			let filteredUsers = [];
			if (users && users.length) {
				filteredUsers = users.filter(
					(item) => item.toLowerCase().indexOf(value) > -1
				);
				setSuggestedUsers(filteredUsers);
				setShowSuggestions(true);		
			}
		} else {
			setSuggestedUsers([]);
			setShowSuggestions(false);		
		}
	}
	
	function handleClick(e) {
		setSearchParam(e.target.innerText);
		setShowSuggestions(false);
	}

	useEffect(() => {
		fetchUsers();
	}, []);
	
	async function fetchUsers() {
		try {
			setLoading(true);
			const responce = await fetch("https://dummyjson.com/users");
			const data = await responce.json();
			if (data && data.users && data.users.length > 0) {
				const userNames = data.users.map((user) => {
					return user.firstName;
				});
				setUsers(userNames);
			}
		} catch (error) {
				setLoading(false);
				console.log(error);
				setError(error.message);
		}
	}

	return (
		<div className="SearchAutocomplete">
			<div className='SearchAutocomplete__annotation'>
				<h1>User Autosuggestion</h1>
				<div>
					<small>Start typing an username. Example: Emma.</small>
				</div>
			</div>
			<input 
				type="text"
				name="search-users"
				value={searchParam}
				onChange={handleSAChange}
				className='SearchAutocomplete__input'
			/>
			{showSuggestions && (
				<>
					{suggestedUsers.length > 0 ? (
						<Suggestions data={suggestedUsers} handleClick={handleClick} />	
					) : (
						<div className='SearchAutocomplete__no-found'>No found</div>
					)}
				</>
			)}
		</div>
	)
}