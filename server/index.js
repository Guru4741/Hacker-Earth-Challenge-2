const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const MONGODB_ACC = process.env.MONGODB_ACC;
const MONGODB_PASS = process.env.MONGODB_PASS;

const profileRouter = require("./routes/profileRoutes.js");
const app = express();

const uri = `mongodb+srv://${MONGODB_ACC}:${MONGODB_PASS}@cluster0.i84ms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});

// Middlewares
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(profileRouter);
app.use(express.static('uploads'));

app.listen('7777', () => {
    console.log('Server Started on PORT 7777.')
})