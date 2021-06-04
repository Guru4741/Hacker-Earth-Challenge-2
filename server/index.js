const express = require('express');
const mongoose = require('mongoose');


const profileRouter = require("./routes/profileRoutes.js");
const app = express();

const uri = "mongodb+srv://gaurav00711:Monica@4741@cluster0.i84ms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});

// Middlewares
app.use(express.json());
app.use(profileRouter);

app.listen('7777', () => {
    console.log('Server Started on PORT 7777.')
})