import axios from "axios"
import { useEffect, useState } from "react"

const App = ()=>{
    const[persons,setPersons] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3003/persons")
        .then(response=>{
            setPersons(response.data)
        })
    },[])
    
   return(
    <div>
       {persons.map(info=><h1 key={info.id}>{info.id} {info.name} {info.number}</h1>)}
    </div>
   )
}
export default App