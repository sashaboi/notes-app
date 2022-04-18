import React, { useState } from 'react'

import { useNote } from '../../context/NoteContext'
import './createnote.css'
const CreateNote = () => {
    const colorOptions = ["red","green","yellow","pink"]
    const [noteColor,setnoteColor]= useState("")
    const [colorSelectorClass ,setcolorSelectorClass]= useState("")
    const {notes,setnotes} = useNote();
    const [newNote,setNewNote] = useState({title:"",data:"",pinned:false,color:"",archive:false,trash:false})
    const createNoteHandler = () => {
        newNote.title===""||newNote.data===""?console.log('alert cant create empty note'):
        setnotes([...notes,newNote])
        setNewNote({title:"",data:"",pinned:false,color:"",archive:false,trash:false})
        setnoteColor("selectedColor")
    }
    const setcolor =(selectedColor)=>{
      setnoteColor(selectedColor)
      setNewNote({...newNote,color:selectedColor})
      setcolorSelectorClass("")
    }
  return (
    <div className='create-note-parent'>
        <h3>Create Note</h3>
        <div className={`create-note-section ${noteColor}`}>

            <input value={newNote.title} onChange={(e)=>setNewNote({...newNote,title:e.target.value})} type="text" id='title' placeholder='add title here'/>
            
            <input value={newNote.data} onChange={(e)=>setNewNote({...newNote,data:e.target.value})} type="text" id='content' placeholder='add content here'/>
            Pin :<input type="checkbox" onClick={(e)=>setNewNote({...newNote,pinned:e.target.checked}) }/>
            
            <button onClick={()=>setcolorSelectorClass("show-color-selector-menu")}>Color selector</button>
            <div className={`color-selector-menu  ${colorSelectorClass} `}>
              {colorOptions.map((obj)=><div onClick={()=>setcolor(obj)} className={`${obj}-select color-selector-hover`}></div>)}
              <div onClick={()=>setcolor("")} className="clear-select color-selector-hover">X</div>
            </div>
            <button onClick={()=>createNoteHandler()}> Add note </button>
        </div>
    </div>
  )
}

export default CreateNote