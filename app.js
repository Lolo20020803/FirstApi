const express = require('express');

const userPath = require('./routes/userRoutes')

const app = express();

//Determinate we use json files 
app.use(express.json);


app.use('/user',userPath);


module.exports = app;