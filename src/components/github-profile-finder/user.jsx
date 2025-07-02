import React from 'react'

export const User = ({userdata}) => {
	console.log(userdata);
	return (
		<div>
			{userdata.name}
		</div>
	)
}
