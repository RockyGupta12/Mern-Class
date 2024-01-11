const mongoose = require('mongoose')

const password = process.argv[2]
const username = process.argv[3]
const number = process.argv[4]
console.log(password)
console.log(username)
console.log(number)

const url = `mongodb+srv://grocky236:${password}cluster0.memelwn.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',true)

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({ 
        name1:String,
        number1:Number,
        name2:String,
        number2:Number
})

const Phonebook = mongoose.model('Phonebook',phonebookSchema)

const phonebook = new Phonebook({
        name1:"Rocky",
        number1:9827586680,
        name2:"Avyudaya sir",
        number2:9865321770
})

phonebook.save().then(result=>{
    console.log('saved')
    console.log("added name:rocky number:9827586860 to phonebook")
    mongoose.connection.close()
})

Phonebook.find({}).then(result=>{
    result.forEach(res=>{
      console.log(res.name1,res.number1)
      console.log(res.name2,res.number2)
    })
    mongoose.connection.close()
})
  
