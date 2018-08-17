const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// Db Config
const db = reuire("./config/keys").mongoURI;
// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Mongo Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
