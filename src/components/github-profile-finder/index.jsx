import React, { useEffect, useState } from 'react'
import { User } from './user';

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState("m-pokrovskii");
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState("");

	async function getUserData(userName) {
		setLoading(true);

		const responce = await fetch(`https://api.github.com/users/${userName}`);
		if (responce.ok) {
			const data = await responce.json();
			if (data) {
				setLoading(false);
				setUserData(data);
			}
		} else {
			setLoading(false);
			setError(`(${responce.status}) Github return an error!`)
		}
	}

	useEffect(() => {
		getUserData(userName);
	}, [])
	

	function handleSubmit(e) {
		e.preventDefault();
		if (loading) {
			return false;
		}
		const formData = new FormData(e.target);
		getUserData(formData.get('username'));
	}
	return (
		<div className='GithubProfileFinder'>
			<form action="" onSubmit={handleSubmit}>
				<input 
					type="text" 
					name="username" 
					value = {userName}
					onChange={(e) => setUserName(e.target.value)}
					id="username" />
			</form>
			{(loading) ? "Loading" : ""}
			{(error) ? error : ""}
			{(userData !== null) ? <User userdata = {userData} /> : null}
		</div>
	)
}
