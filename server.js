'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');


const app = express();

app.use(cors());


const PORT = process.env.PORT || 3003;


app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

app.get('/weather', async (request, response) => {
  let cityName = request.query.city;
  let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${cityName}&days=7`;
  try {
    let weatherResponse = await axios.get(url);
    console.log(weatherResponse.data);
    let dataToSend = weatherResponse.data.data.map(element => {
      return new Weather(element);
    });

    response.send(dataToSend).status(200);
  } catch (error) {
    response.send(error.message).status(500);
  }

});


class Weather {
  constructor(weatherObj) {
    this.date = weatherObj.valid_date;
    this.description = weatherObj.weather.description;
  }
}

app.get('*', (request, response) => {
  response.status(404).send('This route does not exist');
});





app.listen(PORT, () => console.log(`We are up on PORT: ${PORT}`));