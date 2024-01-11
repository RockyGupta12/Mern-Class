const Note = ({note,newNumber,handleChange1,toggleImportance,deleteEntry,handleUpdate})=>{
    const label = note.important ? 'make important' : 'not important'
return(
    <div>
     <h1>{note.title}</h1>
     <p>{note.body}</p> 
     <p>{note.number}</p>
     <label>
        New Number:
        <input type="text" value={newNumber} onChange={handleChange1} />
      </label>
      <button onClick={handleUpdate}>Update Number</button> 
      <br/>  
    <button onClick={toggleImportance}>{label}</button> 
    <br/> 
    <button onClick={deleteEntry}>Delete</button>
    </div>
)
}
export default Note