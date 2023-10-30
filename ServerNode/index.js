//general
const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()
const port = 3000
app.use(
    cors({
      origin: "http://localhost:19006",
    }) 
);

//all routes
const IngredientRouter = require('./routes/ingredient')
const UserRouter = require('./routes/user')
const RecepiesRouter = require('./routes/recipes')
app.use('/ingredient', IngredientRouter)
app.use('/user', UserRouter)
app.use('/recepies', RecepiesRouter)

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