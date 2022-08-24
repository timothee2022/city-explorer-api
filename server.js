'use strict';

const express = require('express');
require('dotenv').config();
// let data = require('./data/weather.json');
const cors = require('cors');


const app = express();

app.use(cors());


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => console.log(`We are up on PORT: ${PORT}`));