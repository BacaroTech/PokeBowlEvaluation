const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();
const ObjectId = require('mongodb').ObjectId;

router.get("/", (req, res) => {
    res.send("work")
})

module.exports = router;