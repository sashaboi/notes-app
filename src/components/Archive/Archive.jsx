import React from 'react'
import {v4 as uuid} from 'uuid'
import SideBar from '../SideBar/SideBar'
import { useNote } from '../../context/NoteContext'
import NoteCard from '../NoteCard/NoteCard'
import Modal from '../modal/Modal';

const Archive = () => {
    const {notes} = useNote();
    console.log(notes)
  return (
    <div className='app-container'>
      <Modal/>
       <div className='sidebar-container'><SideBar/></div>
       <div className='note-side-container'>
         Archived notes
         {notes.length&&notes.map((obj)=>obj.archive&&<NoteCard key={uuid()} noteobj={obj}/>)}
         
         
       </div>
     </div>
  )
}

export default Archive