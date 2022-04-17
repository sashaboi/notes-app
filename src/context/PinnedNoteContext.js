import { createContext,useContext, useState } from "react";

const PinnedContext = createContext();

const NoteProvider = ({children}) =>{
    const [pinnednotes,setpinnednotes] = useState([])
    
    return (
        <PinnedContext.Provider value={{pinnednotes,setpinnednotes}}>
            {children}
        </PinnedContext.Provider>
    )
}


const useNote = () => useContext(PinnedContext)
export {NoteProvider ,useNote}