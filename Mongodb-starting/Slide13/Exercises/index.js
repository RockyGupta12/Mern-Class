const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery',true)
// Define the blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
});
blogSchema.set('toJSON',{
  transform:(document,returnedObject)=>{
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

// Create a Blog model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

// MongoDB connection URL
const mongoUrl = `mongodb+srv://grocky236:NbPw2Lxxxq6EC8gy@cluster0.memelwn.mongodb.net/Blog?retryWrites=true&w=majority`

// Connect to the MongoDB database
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Define routes

// GET all blogs
app.get('/api/blogs', (request, response) => {
  Blog.find({})
    .then(blogs => {
      response.json(blogs);
    })
    .catch(error => {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    });
});

// POST a new blog
app.post('/api/blogs', (request, response) => {
  const body = request.body
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })
  blog.save()
    .then(result => {
      response.status(201).json(result);
    })
    .catch(error => {
      console.error(error);
      response.status(400).json({ error: 'Bad Request' });
    });
});
app.get('/api/blogs/:id',(request,response)=>{
  Blog.findById(request.params.id).then(blog=>{
      if(blog){
        response.json(blog)
      }
      else{
        response.status(404).json('blog not found')
      }
  })
  .catch(error=>{
     console.error(error)
     response.status(500).json({error:'Internal Server Error'})
  })
})

app.put('/api/blogs/:id',(request,response)=>{
  const body = request.body
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }
  Blog.findByIdAndUpdate(request.params.id,blog,{new:true}).then(updatedBlog=>{
    if(updatedBlog){
      response.json(updatedBlog)
    }
    else{
      response.status(404).json('blog not found')
    }
  })
  .catch(error=>{
     console.error(error)
     response.status(500).json({error:'Internal Server Error'})
  })
})
app.delete('/api/blogs/:id',(request,response)=>{
  Blog.findOneAndDelete(request.params.id).then(deletedBLog=>{
    response.status(204).end()
  })
})
// Set up the server to listen on a specific port
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
