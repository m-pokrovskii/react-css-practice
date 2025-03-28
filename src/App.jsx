import React from "react";
import './App.css'
import Accordion from "./components/accordion";
import LoadMore from "./components/load-more";
import RandomColor from "./components/random-color";
import Slider from "./components/slider";
import StarRating from "./components/star-rating";
import ScrollIndicator from "./components/scroll-incicator";
import { tabsData } from "./components/tabs/tabs-data";
import Tabs from "./components/tabs";
import ModalTest from "./components/modal/index-test";


function App() {
	return (
		<div>
			{/* <Accordion multiple /> */}
			{/* <RandomColor /> */}
			{/* <Slider url='https://picsum.photos/v2/list' page='1' limit='5' /> */}
			{/* {<StarRating stars="5" />} */}
			{/* <LoadMore /> */}
			{/* <ScrollIndicator /> */}
			<Tabs tabs={tabsData} />
			{/* <ModalTest /> */}
		</div>
	);
}

export default App;
