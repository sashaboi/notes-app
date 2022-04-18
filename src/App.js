import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Archive from './components/Archive/Archive';
import Trash from './components/Trash/Trash';
const App =()=> {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        
      
      </Routes>
      
    </div>
    
  );
}

export default App;
