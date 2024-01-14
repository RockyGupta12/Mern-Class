const express = require("express");
const app = express();
const mongoose = require("mongoose");
const notesRouter = require("./controllers/notes");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleWare = require("./utils/middleware");

mongoose.set("strictQuery", false);

logger.info("Connecting to Database:", config.MONGODB_URL);

mongoose.connect(config.MONGODB_URL)
  .then((res) => {
    logger.info("Connected to Database");
  })
  .catch((error) => {
    logger.error(error);
  });

app.use(express.json());
app.use(middleWare.requestLogger);

app.get("/", (req, res) => {
  res.end("welcome to my site");
});

app.use("/api/notes", notesRouter);

app.use(middleWare.unknownEndPoint);
app.use(middleWare.errorHandler);
module.exports = app;
