const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const jsonParser = bodyParser.json();
const Recipies = require('../schema/schemas').Recipies;

router.post("/new", jsonParser, async (req, res) => {
    req.body.NomeRicetta = "Ricetta del " + (new Date(Date.now())).toDateString();
    let result = await Recipies.insertMany(req.body);
    if(result){
        res.status(200).send({message: result[0]})
    }else{
        res.status(500).send({message: "error creating recepies"})
    }
})

router.get("/fromUser", jsonParser, async(req, res) => {
    res.status(200).send(await Recipies.find({User: req.body.User}))
})

router.get("/fromDefault", async(req, res) => {
    res.status(200).send(await Recipies.find({User: "Default"}))
})

module.exports = router;