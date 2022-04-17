import React from 'react'

import './notecard.css'
import { useNote } from '../../context/NoteContext'
const NoteCard = ({noteobj}) => {
    const {seteditnote,notes,setnotes} = useNote();
    const deleteNoteHandler = () =>{
        setnotes(notes.filter((obj)=>obj!==noteobj))
    }
    const editNoteHandler = () =>{
        seteditnote({title:noteobj.title,data:noteobj.data,pinned:noteobj.pinned})
        setnotes(notes.filter((obj)=>obj!==noteobj))
    }
    
    const togglePin =()=>{
        setnotes(notes.map((obj)=>obj===noteobj?{...obj,pinned:!obj.pinned}:{...obj}))
        console.log('note to toggle is : ',noteobj);
        
    }
  return (
    <div className='notecard-parent'>
        <div className='note-card-content'>
            <div className="note-title">
                {noteobj.title}
            </div>
            <div className="note-data">
                {noteobj.data}
            </div>
            
        </div>
        <div className="note-card-menu">
            <button onClick={()=>deleteNoteHandler()}>Delete note</button>
            <button onClick={()=>editNoteHandler()}>Edit Note</button>
            <button onClick={()=>togglePin()}>{noteobj.pinned ? <p>Unpin</p>:<p>Pin</p>}</button>
            <button onClick={()=>togglePin()}>{noteobj.trash ? <p>Untrash</p>:<p>Trash</p>}</button>
            <button onClick={()=>togglePin()}>{noteobj.archive ? <p>unarchive</p>:<p>archive</p>}</button>
        </div>
    </div>
  )
}

export default NoteCard