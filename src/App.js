import './App.css';
import ListNotes from './components/ListNotes/ListNotes';
import CreateNote  from './components/CreateNote/CreateNote';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar/Navbar';
import EditNoteModal from './components/EditNoteModal/EditNoteModal';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className='app-container'>
       <div className='sidebar-container'><SideBar/></div>
       <div className='note-side-container'>
         <CreateNote/>
         <ListNotes/>
         <EditNoteModal/>
       </div>
     </div>
       
    </div>
  );
}

export default App;
