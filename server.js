'use strict';

const express = require('express');
require('dotenv').config();
let data = require('./data/weather.json');
const cors = require('cors');


const app = express();

app.use(cors());


const PORT = process.env.PORT || 3003;


app.get('/', (request, response) => {
  // console.log('This is showing up in the terminal!');
  response.status(200).send('Welcome to my server');
});

app.get('/hello', (request, response) => {
  // console.log(request.query);
  let cityName = request.query.cityName;
  response.status(200).send(`Hello from ${citytName}`);
});

app.get('/cityName', (request, response, next) => {
  try {
    let cityName = request.query.cityName;

    let searchQuery = data.find(weather => weather.cityName === cityName);

    let dataToSend = new weather(searchQuery);
    response.status(200).send(dataToSend);
  } catch (error) {
    next(error);
  }
});

class weather {
  constructor(weatherObj) {
    this.city = weatherObj.city;
  }
}

app.get('*', (request, response) => {
  response.status(404).send('This route does not exist');
});







app.listen(PORT, () => console.log(`We are up on PORT: ${PORT}`));