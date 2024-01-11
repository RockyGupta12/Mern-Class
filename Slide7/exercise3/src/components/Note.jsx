const Note = ({note,toggleImportance,deleteEntry})=>{
    const label = note.important ? 'make important' : 'not important'
return(
    <div>
     <h1>{note.title}</h1>
     <p>{note.body}</p> 
     <p>{note.number}</p>   
    <button onClick={toggleImportance}>{label}</button> 
    <br/> 
    <button onClick={deleteEntry}>Delete</button>
    </div>
)
}
export default Note