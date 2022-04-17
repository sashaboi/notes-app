import React, { useState } from 'react'

import { useNote } from '../../context/NoteContext'
import './createnote.css'
const CreateNote = () => {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteData, setNoteData] = useState('')
    const [notepin , setNotePin] = useState(false)
    const [notecolor,setnotecolor]= useState("")
    const [colorselectorclass ,setcolorselectorclass]= useState("")
    const {notes,setnotes} = useNote();
    const createNoteHandler = () => {
        setnotes([...notes,{title:noteTitle,data:noteData,pinned:notepin,color:notecolor,archive:false,trash:false}])
        setNoteData('')
        setNoteTitle('')
        setNotePin(false)
    }
    const setcolor =(selectedcolor)=>{
      setnotecolor(selectedcolor)
      setcolorselectorclass("")
    }
  return (
    <div className='create-note-parent'>
        <h3>Create Note</h3>
        <div className={`create-note-section ${notecolor}`}>

            <input value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} type="text" id='title' placeholder='add title here'/>
            
            <input value={noteData} onChange={(e)=>setNoteData(e.target.value)} type="text" id='content' placeholder='add content here'/>
            Pin :<input type="checkbox" onClick={(e)=>setNotePin(!notepin)}  />
            
            <button onClick={()=>setcolorselectorclass("show-color-selector-menu")}>Color selector</button>
            <div className={`color-selector-menu  ${colorselectorclass} `}>
              <div onClick={()=>setcolor("red")} className="red-select"></div>
              <div onClick={()=>setcolor("green")} className="green-select"></div>
              <div onClick={()=>setcolor("yellow")} className="yellow-select"></div>
              <div onClick={()=>setcolor("pink")} className="pink-select"></div>
            </div>
            <button onClick={()=>createNoteHandler()}> Add note </button>
        </div>
    </div>
  )
}

export default CreateNote