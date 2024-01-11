const mongoose = require('mongoose');

if(process.argv.length < 3){
    console.log("please enter password")
    return
}

const password = process.argv[2];
// const password = "VQ5wQFGdgjWyGP9a"

const url = `mongodb+srv://avyudaya1:${password}@cluster0.q98jlbc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);
mongoose.connect(url);

const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
    content: 'hello world',
    important: true
});

note.save().then(() => {
    console.log('saved');
    mongoose.connection.close();
});

Note.find({important: true}).then(result => {
    result.forEach(element => {
        console.log(element);
    });
});