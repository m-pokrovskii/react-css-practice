import React, { useState } from 'react'
import Modal from './index'

export default function ModalTest() {
	const [openModal, setOpenModal] = useState(false);
	function handleToggleModel() {
		setOpenModal(!openModal);
	}

	function onClose() {
		setOpenModal(false);
	}

	return (
		<div className="ModalBG">
			<div className='ButtonContainer'>
				<button className="ButtonModalOpen" onClick={handleToggleModel}>Open Modal</button>
			</div>
			{
				openModal && (
				<Modal 
					id={"123"}
					onClose={onClose}
					isOpen = {openModal}
				>
				<h1 className='Modal--header'>Invite Your Team</h1>
				<div className='Modal--body'>
					<p>Start collabrating on this new project</p>
					<p><em><small>Clicl outside or a close button to close a modal</small></em></p>
				</div>
				</Modal>
				)
			}
		</div>
	)
}
