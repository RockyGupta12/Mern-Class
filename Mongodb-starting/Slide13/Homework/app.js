const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleWare = require("./utils/middleware");
const blogsRouter = require("./controller/blogs");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
logger.info("connecting to  Database:", config.MONGODB_URI );

mongoose
  .connect(config.MONGODB_URI )
  .then((response) => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error(error);
  });

app.use(express.json());
app.use(cors);
app.use(middleWare.requestLogger);

app.use("/api/blogs", blogsRouter);

app.use(middleWare.unknownEndPoint);
app.use(middleWare.errorHandler);

module.exports = app;
