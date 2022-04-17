

import { useNote } from '../../context/NoteContext'
const EditNoteModal = () => {
    const {editnote,seteditnote , setnotes, notes}=useNote();
    
    
    const saveEditedNoteHandler = () =>{
        setnotes([...notes,editnote])
        seteditnote({title:"",data:"",pinned:editnote.pinned})
        }
  return (
    <div className='edit-notes-parent'>
        Edit Notes
        <input onChange={(e)=>seteditnote({...editnote,title:e.target.value})} value={editnote.title} type="text"  />
        <input onChange={(e)=>seteditnote({...editnote,data:e.target.value})} value={editnote.data} type="text"  />
        
        <button onClick={(e)=>saveEditedNoteHandler()}>Save Edited Note</button>
    </div>
  )
}


export default EditNoteModal