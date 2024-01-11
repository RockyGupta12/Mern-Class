const express = require("express");

const app = express();

require("dotenv").config();

const Phonebook = require("./models/phonebook");

const requestLogger = (request, response, next) => {
  console.log("Method", request.method);
  console.log("Path", request.path);
  console.log("Body", request.body);
  console.log("---");
  next();
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "cast error") {
    return response.status(400).send({ error: "malformated id" });
  }
  next(error);
};

const unknownEndPonit = (request, response) => {
  response.status(404).send({ error: "unknown EndPoint" });
};

app.use(express.json());
app.use(requestLogger);

app.get("/api/phonebooks", (request, response) => {
  Phonebook.find({}).then((result) => {
    response.json(result);
  });
});

app.post("/api/phonebooks", (request, response) => {
  const body = request.body;
  if (body.name1 === undefined && body.name2 === undefined) {
    return response.status(400).send({ error: "content missing" });
  }

  const phonebook = new Phonebook({
    name1: body.name1,
    number1: body.number1,
    name2: body.name2,
    number2: body.number2,
  });
  phonebook.save().then((result) => {
    response.json(result);
  });
});

app.get("/api/phonebooks/:id", (request, response, next) => {
  Phonebook.findById(request.params.id)
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});
app.put("/api/phonebooks/:id", (request, response, next) => {
  const body = request.body;

  const phonebook = {
    name1: body.name1,
    number1: body.number1,
    name2: body.name2,
    number2: body.number2,
  };

  Phonebook.findByIdAndUpdate(request.params.id, phonebook, { new: true })
    .then((updatePhonebook) => {
      response.json(updatePhonebook);
    })
    .catch((error) => next(error));
});

app.delete("/api/phonebooks/:id", (request, response, next) => {
  Phonebook.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.use(unknownEndPonit);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
