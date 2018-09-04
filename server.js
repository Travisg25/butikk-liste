const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items.js");
const app = express();
const path = require("path");

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

app.use("/api/items", items);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
