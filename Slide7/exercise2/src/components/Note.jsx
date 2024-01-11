const Note = ({note,toggleImportance})=>{
    const label = note.important ? 'make important' : 'not important'
return(
    <div>
     <h1>{note.title}</h1>
     <h2>{note.body}</h2> 
     <p>{note.number}</p>   
    <button onClick={toggleImportance}>{label}</button>  
    </div>
)
}
export default Note