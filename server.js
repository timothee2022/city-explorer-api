'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const getWeather = require('./weather.js');
const getMovies = require('./movies.js');


const app = express();

app.use(cors());


const PORT = process.env.PORT || 3003;


app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

app.get('/weather', getWeather);

app.get('/movies', getMovies);



app.get('*', (request, response) => {
  response.status(404).send('This route does not exist');
});


app.listen(PORT, () => console.log(`We are up on PORT: ${PORT}`));