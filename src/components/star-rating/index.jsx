import React, { useState } from "react";
import "./index.css";
const StarRating = ({ stars = 5 }) => {
	const starArray = Array.from({ length: stars }, (_, index) => index + 1);
	const [currentRating, setCurrentRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);
	const handleStarClick = (s) => {
		setCurrentRating(s);
	};

	const handleStarHover = (s) => {
		setHoverRating(s);
	};

	const handleStarLeave = (s) => {
		setHoverRating(0);
	};

	return (
		<div>
			{starArray.map((s) => (
				<span
					className={`star 
						${s <= currentRating ? "star-filled" : ""} 
						${s <= hoverRating ? "star-hovered" : ""}`
					}
					key={s}
					onClick={() => handleStarClick(s)}
					onMouseEnter={() => handleStarHover(s)}
					onMouseLeave={() => handleStarLeave()}
				>
					&#9733;
				</span>
			))}
			<div>Current Rating {currentRating}</div>
			<div>Hover Rating {hoverRating}</div>
		</div>
	);
};

export default StarRating;
