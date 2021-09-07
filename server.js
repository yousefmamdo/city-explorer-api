'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherData = require('./assets/weather.json');

const server = express();
server.use(cors());

const PORT = process.env.PORT;



let weatherArr=[];

// http://localhost:3010/weather
server.get('/weather', (req, res) => {
    const name = req.query.name;
    const lon = req.query.lon;
    const result = weatherData.find((item) => {

        if (item.city_name === name)
        weatherArr =item.data.map(day =>{
const dayObj= new Forecast(day);
return dayObj;

       })
        return item;
    })

    res.send(weatherArr);
})
class Forecast {
    constructor(item) {
        this.date = day.valid_date;
        this.description = `Low of ${day.low_temp}, high of ${day.high_temp}with ${day.weather.valid_date}`
        
    }
}
// http:localhost:3010/***** */
server.get('*', (req, res) => {
    res.status(404).send('Sorry, page not found');
})

// to make our server listen on PORT
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})