import React from 'react'

import EditNoteModal from '../EditNoteModal/EditNoteModal'
import './modal.css'
import { useModal } from '../../context/ModalContext'
const Modal = () => {
    const {modalshow} = useModal();
    if(!modalshow){
        return null
    }
    return (
        <div className='modal-parent modal-positioning'>
            <EditNoteModal/>
        </div>
    )
}

export default Modal