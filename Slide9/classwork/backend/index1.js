const express = require('express') // Importing Modules: Here, the code imports the Express framework, which simplifies the process of creating web servers and handling HTTP requests.
const app = express()// Creating an Express Application:This line creates an instance of the Express application 'app' is used to configure routes and handle HTTP requests.

//Defining an Array of Notes: This array, named notes, contains objects representing notes with id, content, and important properties.
let notes= [
    {
        id:1,
        content: 'HTMLis easy',
        important:true
    },
    {
        id:2,
        content: 'Browser can execute only JavaScript',
        important:false
    },
    {
        id:3,
        content: 'GET and POST are the important methods of HTTP protocol',
        important:true
    }
]

//Defining a Route for the Root URL ("/"):This route responds with an HTML message "Hello World" when the root URL is accessed using an HTTP GET request.
// app.get('/', (request,response)=>{
//     response.send('<h1>Hello World</h1>')
// })

//Defining Another Route for the Root URL ("/"):This is a mistake in the code. It defines another route for the root URL with a conflicting route handler.
// The second route will never be reached because the first one already handles the same URL
// app.get('/',(request,response)=>{
//     response.json(notes)
// })
//This code sets up the server to listen on port 3002. When the server is started, it logs a message indicating the port on which the server is running.

/*app.get('/api/notes/:id',(request,response)=>{
const id = request.params.id
    const note = notes.find(note=>note.id===id)
    response.json(note)
})*/
//     app.get('/api/notes/:id',(request,response)=>{
//     const id = Number(request.params.id)
//     const note = notes.find(note=>note.id===id)
//     response.json(note)
// })

app.get('/api/notes/:id',(request,response)=>{
    const id = Number(request.params.id) //Extracting the ID from the Request Parameters:
    const note = notes.find(note=>note.id===id)//It searches for a note in the 'notes' array whose 'id' property matches the extracted 'id' from the request parameters. The Array.find method is used for this purpose.
    if(note){
        response.json(note)
    }else{
        response.status(404).json({message:'Note not found'})
    }
})
app.get('/api/notes', (req, res) => {
    res.json(notes)
})
const PORT = 3002
app.listen(PORT)
console.log(`Server is running on ${PORT}`)