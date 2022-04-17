import React from 'react'


import ListNotes from '../ListNotes/ListNotes';
import SideBar from '../SideBar/SideBar';
import CreateNote from '../CreateNote/CreateNote';
import Modal from '../modal/Modal';

import './homepage.css'
const HomePage = () => {
  
  return (
    <div>
        <Modal/>
     <div className='app-container'>
       <div className='sidebar-container'><SideBar/></div>
       <div className='note-side-container'>
         <CreateNote/>
         
         <ListNotes/>
         
       </div>
     </div>
       
    </div>
  )
}

export default HomePage