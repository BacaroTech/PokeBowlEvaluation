//general
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

//all routes
const IngredientRouter = require('./ingredient')
app.use('/ingredient', IngredientRouter)

//connecting to db
mongoose.connect(
    "mongodb://127.0.0.1:27017/pokebowl_evaluation"
)
.then(()=>console.log('[server]: Connected to mongoDB'))
.catch(e=>console.log('[server]: Error' + e));

//check connection work
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});