import { useContext,createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider =({children})=>{

    const [modalshow,setmodalshow] = useState(false)
    return(
    
    <ModalContext.Provider value={{modalshow,setmodalshow}}>
        {children}
    </ModalContext.Provider>

    )
    
}

const useModal=()=>useContext(ModalContext);

export {useModal,ModalProvider}