const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minlength:5
    },
    important:Boolean,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
noteSchema.set('toJSON',{
    transform:function(document, returnedObject){
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})
const Note= mongoose.model('Note',noteSchema)