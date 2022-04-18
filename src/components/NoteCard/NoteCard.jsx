import React from 'react'


import { BsFillTrashFill } from 'react-icons/bs';


import './notecard.css'
import { useNote } from '../../context/NoteContext'
import { useModal } from '../../context/ModalContext'
const NoteCard = ({noteobj}) => {
    const {setmodalshow} = useModal();
    const {seteditnote,notes,setnotes} = useNote();
    const deleteNoteHandler = () =>{
        setnotes(notes.filter((obj)=>obj!==noteobj))
    }
    const editNoteHandler = () =>{
        seteditnote({title:noteobj.title,data:noteobj.data,pinned:noteobj.pinned,archive:noteobj.archive,trash:noteobj.trash})
        setnotes(notes.filter((obj)=>obj!==noteobj))
        setmodalshow(true)
    }
    
    const togglePin =()=>{
        setnotes(notes.map((obj)=>obj===noteobj?{...obj,pinned:!obj.pinned}:{...obj}))
        console.log('note to toggle is : ',noteobj);
        
    }
    const toggleTrash =()=>{
        setnotes(notes.map((obj)=>obj===noteobj?{...obj,trash:!obj.trash}:{...obj}))
        console.log('note to toggle is : ',noteobj);
        
    }
    const toggleArchive =()=>{
        setnotes(notes.map((obj)=>obj===noteobj?{...obj,archive:!obj.archive}:{...obj}))
        console.log('note to toggle is : ',noteobj);
        
    }
  return (
    <div className={`notecard-parent ${noteobj.color}`}>
        <div className='note-card-content'>
            <div className="note-title">
                {noteobj.title}
            </div>
            <div className="note-data">
                {noteobj.data}
            </div>
            
        </div>
        <div className="note-card-menu">
            <button onClick={()=>deleteNoteHandler()}><BsFillTrashFill/></button>
            <button onClick={()=>editNoteHandler()}>Edit Note</button>
            <button onClick={()=>togglePin()}>{noteobj.pinned ? <p>Unpin</p>:<p>Pin</p>}</button>
            <button onClick={()=>toggleTrash()}>{noteobj.trash ? <p>Untrash</p>:<p>Trash</p>}</button>
            <button onClick={()=>toggleArchive()}>{noteobj.archive ? <p>unarchive</p>:<p>archive</p>}</button>
        </div>
    </div>
  )
}

export default NoteCard