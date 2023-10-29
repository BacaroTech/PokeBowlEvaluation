const mongoose = require("mongoose");

const Ingredient = new mongoose.Schema({
    Nome: String,
    Categoria: String,
    Kcal: Number
});
const User = new mongoose.Schema({
    Nome: String,
    Mail: String,
    Password: String,
})
const Recipies = new mongoose.Schema({
    NomeRicetta: String,
    User: String,
    Base: String,
    Proteina1: String,
    Proteina2: String,
    Ing1: String,
    Ing2: String,
    Ing3: String,
    Salsa1: String,
    Salsa2: String
})

const modelIngredient = mongoose.model("Ingredient", Ingredient);
const modelUser = mongoose.model("User", User);
const modelRecipies = mongoose.model("Recipies", Recipies);

module.exports = {
    Ingredient: modelIngredient,
    User: modelUser,
    Recipies: modelRecipies
}