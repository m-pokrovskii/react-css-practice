import React, { useEffect, useRef } from 'react'
import './index.css';

export default function Modal({children, onClose, id}) {
		const modalRef = useRef();
		useEffect(() => {
			function  handleClickOutside (e) {
				if (modalRef.current && !modalRef.current.contains(e.target)) {
					onClose();
				}
			};
	
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('touchstart', handleClickOutside);
	
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
				document.removeEventListener('touchstart', handleClickOutside);
			};
		}, [onClose]);
	
		return (
		<div className="ModalBackdrop">
			<div className='Modal' id={id} ref={modalRef}>
				<div onClick={onClose} className='Modal--close'>&times;</div>
				<div>{children}</div>
			</div>
		</div>
	)
}
