//Importing Mongoose:
const mongoose = require ('mongoose');//This line imports the Mongoose library, allowing you to interact with MongoDB in a more structured and schema-based way.

//Defining MongoDB Connection URL:
const url = 'mongodb+srv://grocky236:NbPw2Lxxxq6EC8gy@cluster0.memelwn.mongodb.net/?retryWrites=true&w=majority'//the url variable contains the connection string for MongoDB. This URL includes the username, password, host, and other details necessary to connect to a MongoDB database

//Configuring Mongoose:
// mongoose.set('strictQuery',true);//This line sets the strictQuery option to true. This option enforces the use of strict mode for queries, which means that you cannot perform queries on fields that are not defined in the schema.
mongoose.set('strictQuery',false);//This line sets the strictQuery option to false. In Mongoose, setting strictQuery to false allows you to perform queries even on fields that are not defined in the schema.

//Connecting to MongoDB:
mongoose.connect(url);//This line establishes a connection to the MongoDB database using the provided connection URL.

//Defining a Mongoose Schema:
//This code defines a Mongoose schema for a 'Note' document in the MongoDB collection. The schema specifies two fields: 'content' (of type String) and 'important' (of type Boolean).
const noteSchema = new mongoose.Schema({
    content: String,
    important:Boolean,
});

//Creating a Mongoose Model:
const Note = mongoose.model('Note',noteSchema);//This line creates a Mongoose model named 'Note' based on the defined schema. The model represents a collection in the MongoDB database

//Creating and Saving a Document:A new instance of the 'Note' model is created with specific content and importance. The save() method is then called to save this document to the MongoDB database. After successful saving, it logs 'saved' to the console and closes the database connection.
const note= new Note({
    content:'rocky',
    important:true,
})
note.save().then(()=>{
    console.log('saved');
    mongoose.connection.close();
})
Note.find({}).then((result)=>{
    result.forEach(note=>{
        console.log(note.content, note.important)
    })
    mongoose.connection.close();
})