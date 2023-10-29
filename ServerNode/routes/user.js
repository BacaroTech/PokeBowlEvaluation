const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const jsonParser = bodyParser.json();
const User = require('../schema/schemas').User;

router.post("/login", jsonParser, async (req, res) => {
  let userFound = await User.find({
    Mail: req.body.Mail,
    Password: req.body.Password
  })
  if(userFound){
    res.status(200).send({message: userFound[0].Nome});
  }else{
    res.status(500).send({message: "user not found"});
  }
})

router.post("/createEmployer", jsonParser, async(req, res) => {
  let newEmployer = await User.insertMany(req.body)
  if(newEmployer && newEmployer.length > 0){
    res.status(200).send({message: newEmployer});
  }else{
    res.status(500).send({message: "an error occurred"});
  }
})

module.exports = router;