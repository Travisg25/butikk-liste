const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items.js");
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// Db Config
const db = require("./config/keys").mongoURI;
// Connect to Mongo
mongoose
  .connect(
    "mongodb://Travis:travis123@ds123532.mlab.com:23532/g25-mern-shopping-list"
  )
  .then(() => console.log("Mongo Connected..."))
  .catch(err => console.log(err));

app.use("api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
