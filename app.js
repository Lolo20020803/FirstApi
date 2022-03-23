const express = require('express');

const userPath = require('./routes/userRoutes');

const { standar } = require('./controller/controller');

const app = express();

// Determinate we use json files
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/user', userPath);
// Main page of the API
app.use('/', standar);

module.exports = app;
