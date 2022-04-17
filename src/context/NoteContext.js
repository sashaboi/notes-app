import { createContext,useContext, useState } from "react";

const NoteContext = createContext();

const NoteProvider = ({children}) =>{
    const [notes,setnotes] = useState([])
    const [editnote, seteditnote] = useState([])
    return (
        <NoteContext.Provider value={{notes,setnotes,editnote, seteditnote}}>
            {children}
        </NoteContext.Provider>
    )
}


const useNote = () => useContext(NoteContext)
export {NoteProvider ,useNote}