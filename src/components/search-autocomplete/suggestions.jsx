import React from 'react'

export default function Suggestions({data, handleClick}) {
	return (	
		<ul className='SearchAutocomplete__suggestion'>
			{
				(data && data.length)
				? data.map((item, index) => {
					return <li onClick={handleClick} key={index}>{item}</li>
				})
				: null
			}
		</ul>
	)	
}
