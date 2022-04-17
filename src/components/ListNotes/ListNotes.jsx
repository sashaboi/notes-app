import React from 'react'
import {v4 as uuid} from 'uuid'

import './listnotes.css'
import NoteCard from '../NoteCard/NoteCard'
import { useNote } from '../../context/NoteContext'
const ListNotes = () => {
    const {notes} = useNote();
  return (
    <div className='list-notes-parent'>
        <h1>List Notes </h1>
        <div className='notes-container'>
            <div className='pinned-notes-list notes-list-common'>
                Pinned Notes : 
                {notes.length ===0 ? <p>No Notes !</p>:notes.map((obj)=>obj.pinned&&< NoteCard key={uuid()} noteobj={obj}/>)}
                
            </div>
            
            <div className="normal-notes-list  notes-list-common">
            unPinned Notes : 
            {notes.length ===0 ? <p>No Notes !</p>:notes.map((obj)=>obj.pinned===false?< NoteCard key={uuid()} noteobj={obj}/>:<></>)}
                
            </div>
        </div>
    </div>
  )
}

export default ListNotes