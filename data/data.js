import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    }
  }
}

handleInput = (e) => {
  this.setState({
    cityName: e.target.value
  });
}

handleSubmit = async (e) => {
  e.preventDefault();

  let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.species}`
  let petData = await axios.get(url);