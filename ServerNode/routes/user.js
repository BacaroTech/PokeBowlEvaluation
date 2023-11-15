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
  if(userFound && userFound.length > 0){
    res.status(200).send({message: userFound[0]});
  }else{
    res.status(400).send({message: "user not found"});
  }
})

router.post("/register", jsonParser, async(req, res) => {
  let replaceUser = await User.find({Nome: req.body.Nome, Mail: req.body.Mail});
  console.log(replaceUser);
  
  if(replaceUser && replaceUser.length > 0)
    res.status(500).send({message: "an error occurred"});
  else{
    let newUser = await User.insertMany(req.body)
    if(newUser && newUser.length > 0){
      res.status(200).send({message: newUser[0]});
    }else{
      res.status(500).send({message: "an error occurred"});
    }
  }
  
})



module.exports = router;