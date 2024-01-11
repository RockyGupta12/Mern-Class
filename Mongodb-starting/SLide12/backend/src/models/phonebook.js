const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;
mongoose
  .connect(url)
  .then((response) => {
    console.log("connecting to MongoDB");
  })
  .catch((error) => {
    console.log("Cannot connect to MongoDB:", error.message);
  });

const phonebookSchema = new mongoose.Schema({
  name1: {
    type: String,
    minlength: 3,
  },
  number1: {
    type: String,
    match: /^\d{2,3}-\d{6,}$/,
  },
  name2: {
    type: String,
    minlength: 3,
  },
  number2: {
    type: String,
    match: /^\d{2,3}-\d{6,}$/,
  },
});
phonebookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Phonebook", phonebookSchema);
