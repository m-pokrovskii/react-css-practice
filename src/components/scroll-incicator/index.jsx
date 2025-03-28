import React, { useState } from 'react'
import { useEffect } from 'react';
import './index.css'

export default function ScrollIndicator() {
	const [scrollWidthPercentage, setScrollWidthPercentage] = useState(0);
	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		const swp = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
		setScrollWidthPercentage(swp);
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)	
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<div className='ScrollIndicator'>
			<div className='scroll' style={{width: `${scrollWidthPercentage}%`}}></div>
			<div className='ScrollIndicatorText'>Scroll to see the component in action. <br /> <strong>Scroll: {scrollWidthPercentage}%</strong></div>
		</div>
	)
}
