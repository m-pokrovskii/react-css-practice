import React from "react";
import { useState } from "react";
import './index.css'
export default function Tabs({tabs}) {
	const [activeTab, setActiveTab] = useState(0);
	function handleTabChange(index) {
		console.log('index');
		setActiveTab(index);
		console.log(activeTab);
	}
	return (
		<div className="TabsComponent">
			<ul className="tabs-labels">
			{tabs.map((tab, index) => 
				(
					<li 
						onClick={() => setActiveTab(index)} 
						key={tab.id}
						className = {`tab-label ${index === activeTab ? '-isActive' : ''}`}
					>
						<span className="tab-label__title">{tab.label}</span>
					</li>
				)
			)}
			</ul>
			<div className="tab-content">{tabs[activeTab].content}</div>
		</div>
	)
}