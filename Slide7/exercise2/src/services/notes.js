import axios from "axios"
const baseUrl = 'http://localhost:3001/notes'
const getAll =()=>{
    return axios.get(baseUrl)
}
const create = newNoteobj=>{
    return axios.post('http://localhost:3001/notes',newNoteobj)
}
const update = (id,changedNote) =>{
    return axios.put(`http://localhost:3001/notes/${id}`,changedNote)
}
export default{
    getAll,
    create,
    update
}