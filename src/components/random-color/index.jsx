import React, { useEffect, useState } from "react";

const RandomColor = () => {
	const [rgbColor, setRgbColor] = useState({
		bg: "rgb(0, 0, 0)",
		text: "rgb(255, 255, 255)",
	});
	const [hexColor, setHexColor] = useState({
		bg: "#000000",
		text: "#ffffff",
	});
	useEffect(() => {
		handleGenarateColor();
	}, []);
	const handleGenarateColor = () => {
		console.log("generate");
		// Generate random values for red, green, and blue
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		const invertedRed = 255 - red;
		const invertedGreen = 255 - green;
		const invertedBlue = 255 - blue;

		// Convert the values to hexadecimal and pad with zeros if needed
		const redHex = red.toString(16).padStart(2, "0");
		const greenHex = green.toString(16).padStart(2, "0");
		const blueHex = blue.toString(16).padStart(2, "0");

		const invertedRedHex = invertedRed.toString(16).padStart(2, "0");
		const invertedGreenHex = invertedGreen.toString(16).padStart(2, "0");
		const invertedBlueHex = invertedBlue.toString(16).padStart(2, "0");

		// Combine into a hex color string
		const hexColor = `#${redHex}${greenHex}${blueHex}`;
		const rgbColor = `rgb(${red},${green},${blue})`;

		const invertedHexColor = `#${invertedRedHex}${invertedGreenHex}${invertedBlueHex}`;
		const invertedRgbColor = `rgb(${invertedRed},${invertedGreen},${invertedBlue})`;

		setRgbColor({
			bg: rgbColor,
			text: invertedRgbColor,
		});

		setHexColor({
			bg: hexColor,
			text: invertedHexColor,
		});
	};
	return (
		<div>
			<button
				style={{
					backgroundColor: rgbColor.bg,
					color: rgbColor.text,
				}}
				onClick={() => handleGenarateColor()}
			>
				BG: {"{"} rgb: {rgbColor.bg} hex: {hexColor.bg} {"}"}, <br />
				TEXT {"{"} rgb: {rgbColor.text} hex: {hexColor.text} "{"}"}
			</button>
		</div>
	);
};
export default RandomColor;
