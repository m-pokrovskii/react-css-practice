import React, { useState } from 'react';
import data from './data.js'
import './styles.css'
const Accordion = ({multiple}) => {
	const [selected, setSelected] = useState([])
	const handleClick = (id) => {
		let ids = [...selected];
      if (ids.includes(id)) {
        ids = ids.filter((item) => item !== id);
      } else {
        if (multiple) {
          ids = []
        }
        ids.push(id);
      }  
      setSelected(ids);
	}
	return (
    <div className="Accordion">
      {data.map((el) => {
				return (
          <div
            onClick={() => handleClick(el.id)}
            className='AccordionItem'
            key={el.id}
          >
            <div>{el.question}</div>
            <div>
							{
								selected.indexOf(el.id) !== -1 && 
								el.answer
							}
						</div>
          </div>
        );
			})}
    </div>
  );
}
 
export default Accordion;