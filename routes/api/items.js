const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@ route GET
//@ description Get all items
//@ access Public

router.get("/", (req, res) => {});
module.exports = router;
