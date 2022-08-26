'use strict';

const axios = require('axios');

async function getMovies(request, response){
  try {
    // console.log(request.query);
    let moviesName = request.query.movies;
    // let cityName = request.query.city;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${moviesName}`;

    let moviesResponse = await axios.get(url);
    console.log(moviesResponse.data);
    let dataToSend = moviesResponse.data.results.map(element => {
      return new Movies(element);
    });

    response.send(dataToSend).status(200);
  } catch (error) {
    response.send(error.message).status(500);
  }

}

class Movies {
  constructor(moviesObj) {
    this.title = moviesObj.original_title;
    this.overview = moviesObj.overview;
  }
}

module.exports = getMovies;
