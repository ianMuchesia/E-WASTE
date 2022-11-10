import React , { useState, useEffect} from 'react'
import { useContext } from 'react'
import { database } from "./config/firebaseConfig"
import {collection, getDocs } from 'firebase/firestore'


const AppContext = React.createContext()



const AppProvider=({children})=>{

    //customers
    const postsRef = collection(database, "customers")
    
    const [customers,setCustomers] = useState([])

    const getCustomers=async()=>{
        const data = await getDocs(postsRef)
        setCustomers(data.docs.map(doc=>({...doc.data(),id:doc.id}))) 
    }
    useEffect(()=>{
        getCustomers();
    },[])
   
 
    //technicians
    const [ technicians, setTechnicians ] = useState([])
    const techniciansCollectionRef = collection(database,"technicians")

    useEffect(()=>{
        const getTechnicians=async()=>{
            const data = await getDocs(techniciansCollectionRef)
            setTechnicians(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        getTechnicians()
    },[])
    
    const [otherTechnicians, setOtherTechnicians] = useState([])
    const handleOtherTechnicians =(id)=>{
        const newArray = technicians.filter(technician=>technician.id!==id)
        setOtherTechnicians(newArray)
    }


    return(
        <AppContext.Provider value={{postsRef,technicians,otherTechnicians,handleOtherTechnicians,customers}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}