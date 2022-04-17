import React, { useState } from 'react'

import { useNote } from '../../context/NoteContext'
import './createnote.css'
const CreateNote = () => {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteData, setNoteData] = useState('')
    const [notepin , setNotePin] = useState(false)
    const {notes,setnotes} = useNote();
    const createNoteHandler = () => {
        setnotes([...notes,{title:noteTitle,data:noteData,pinned:notepin,color:"",archived:false,trash:false}])
        setNoteData('')
        setNoteTitle('')
        setNotePin(false)
    }
  return (
    <div className='create-note-parent'>
        <h3>Create Note</h3>
        <div className='create-note-section'>

            <input value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} type="text" id='title' placeholder='add title here'/>
            
            <input value={noteData} onChange={(e)=>setNoteData(e.target.value)} type="text" id='content' placeholder='add content here'/>
            Pin :<input type="checkbox" onChange={(e)=>setNotePin(!notepin)} value={notepin} />
            <button onClick={()=>createNoteHandler()}> Add note </button>
        </div>
    </div>
  )
}

export default CreateNote