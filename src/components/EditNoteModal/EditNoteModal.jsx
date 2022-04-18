import './editnotemodal.css'
import { useNote } from '../../context/NoteContext'
import { useModal } from '../../context/ModalContext';
const EditNoteModal = () => {
    const {editnote,seteditnote , setnotes, notes}=useNote();
    const {setmodalshow} = useModal();
    const restoreNote = {...editnote}
    const saveEditedNoteHandler = () =>{
        setnotes([...notes,editnote])
        seteditnote({title:"",data:"",pinned:editnote.pinned,archive:editnote.archive,trash:editnote.trash,color:editnote.color})
        setmodalshow(false)
    }
    const cancelAndRestore = () => {
      setnotes([...notes,restoreNote])
      seteditnote({title:"",data:"",pinned:editnote.pinned,archive:editnote.archive,trash:editnote.trash,color:editnote.color})
      setmodalshow(false)
    } 
  return (
    <div className='edit-notes-parent'>
        <div className='edit-note-title'>
          <h3>Edit Note</h3>
          <p onClick={()=>cancelAndRestore()} className='edit-note-cancel'>X</p>
        </div>
        <input onChange={(e)=>seteditnote({...editnote,title:e.target.value})} value={editnote.title} type="text"  />
        <input onChange={(e)=>seteditnote({...editnote,data:e.target.value})} value={editnote.data} type="text"  />
        
        <button onClick={(e)=>saveEditedNoteHandler()}>Save Edited Note</button>
    </div>
  )
}

 
export default EditNoteModal