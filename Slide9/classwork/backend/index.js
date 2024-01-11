const http = require('http')
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
const app = http.createServer((request,response)=>{
    response.writeHead(200,{'content-Type': 'application/json'})
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`server running on port ${PORT}`)
//  this is simple node server to run in browser write http://localhost:3001