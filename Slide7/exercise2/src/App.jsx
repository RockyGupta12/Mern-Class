import noteService from './services/notes'
import axios from "axios"
import { useEffect, useState } from "react"
import Note from "./components/Note"

const App =()=>{
    const[notes,setNotes] = useState([])

    useEffect(()=>{
      noteService
      .getAll()
      .then(response=>{
         setNotes(response.data)
      })
    },[])

    const[newNotes,setNewNotes] = useState('')
    const handlechange = (event)=>{
      setNewNotes(event.target.value)
        console.log(event.target.value)
    }
    
    const addNotes = (event)=>{
      event.preventDefault();
      const newNoteobj ={
       id:notes.length+1,
       title:newNotes,
       body:'hellooo',
       number:123456789,
       important:Math.random() >0.5
      }
      noteService
      .create(newNoteobj)
      .then(response=>{
        setNotes(notes.concat(response.data))
        setNewNotes('')
      })
   
    }
    const toggleImportanceOf =id =>{
    const url =`http://localhost:3001/notes/${id}`
    const note = notes.find(note=>note.id===id)
    const changedNote = {...note, important : !note.important }
    noteService
    .update(id,changedNote)
    .then(response=>{
       setNotes(notes.map(note=>note.id===id?response.data:note))
 
    })
    }

   return(
    <div>     
      <form onSubmit={addNotes}>
     <input value={newNotes} onChange={handlechange} ></input>
     <button>Add</button>
      </form>
     {notes.map(note => <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)}/>)}
    </div>
   )
}
export default App