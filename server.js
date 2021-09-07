'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherData = require('./assets/weather.json');

const server = express();
server.use(cors());

const PORT = process.env.PORT;

class Forecast {
    constructor(item) {

        this.description = item.weather.description;
        this.data = item.valid_date;
    }
}



// http://localhost:3010/weather
server.get('/weather', (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const searchQuery = weatherData[0].data.find((item) => {
        if (item.lat === lat && item.lon === lon)
            return item;
    })

    res.send(searchQuery);
})

// http:localhost:3010/***** */
server.get('*', (req, res) => {
    res.status(404).send('Sorry, page not found');
})

// to make our server listen on PORT
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})