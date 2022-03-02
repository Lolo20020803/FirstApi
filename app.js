const express = require('express');

const app = express();

//Determinate we use json files 
app.use(express.json);


app.use('/user',usersRoute);


module.exports = app;