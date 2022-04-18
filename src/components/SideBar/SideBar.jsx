import React from 'react'
import { Link } from 'react-router-dom';


const SideBar = () => {
 
  
  return (
    <div className='sidebar-parent'>
      <Link to='/'> <h3>Home</h3></Link>
      <Link to='/archive'><h3>Archive</h3></Link>
      <Link to='/trash'><h3>Trash</h3></Link>
    </div>
  )
}

export default SideBar