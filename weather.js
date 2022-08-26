'use strict';

const axios = require('axios');

async function getWeather(request, response) {
  try {

    let cityName = request.query.city;
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${cityName}&days=7`;
    let weatherResponse = await axios.get(url);
    // console.log(weatherResponse.data);
    let dataToSend = weatherResponse.data.data.map(element => {
      return new Weather(element);
    });

    response.send(dataToSend).status(200);
  } catch (error) {
    response.send(error.message).status(500);
  }

}

class Weather {
  constructor(weatherObj) {
    this.date = weatherObj.valid_date;
    this.description = weatherObj.weather.description;
  }
}

module.exports = getWeather;