const mongoose = require('mongoose')

//const password = process.argv[2]
//const password = NbPw2Lxxxq6EC8gy@

const url =process.env.MONGODB_URL
console.log("connecting to mongodb:",url)

mongoose.set('strictQuery',true)

mongoose.connect(url)
.then(response=>{
        console.log("connected to mongodb")
})
.catch(error=>{
        console.log('error connecting to MongoDB:', error.message)
})

const phonebookSchema = new mongoose.Schema({ 
        name1:String,
        number1:Number,
        name2:String,
        number2:Number
})
phonebookSchema.set('toJSON',{
        transform:(document,returnedObject)=>{
                returnedObject.id= returnedObject._id.toString()
                delete returnedObject._id
                delete returnedObject.__v
               }
})
module.exports= mongoose.model('Phonebook',phonebookSchema)