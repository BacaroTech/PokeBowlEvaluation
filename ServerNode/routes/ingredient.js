const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Ingredient = require('../schema/schemas').Ingredient;

router.get("/all", async (req, res) => {
    res.status(200).send(await Ingredient.find())
})

router.get("/proteine", async (req, res) => {
    res.status(200).send(await Ingredient.find({Categoria: "Proteina"}))
})

router.get("/salse", async (req, res) => {
    res.status(200).send(await Ingredient.find({Categoria: "Salsa"}))
})

router.get("/basi", async (req, res) => {
    res.status(200).send(await Ingredient.find({Categoria: "Base"}))
})

router.get("/ingredienti", async (req, res) => {
    res.status(200).send(await Ingredient.find({Categoria: "Ingrediente"}))
})

router.get("/getSingle", jsonParser, async (req, res) => {
    res.status(200).send(await Ingredient.find({Nome: req.body.Nome}))
})


module.exports = router;