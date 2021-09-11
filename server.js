'use strict';

const axios = require('axios');
const express = require('express'); 
const cors = require('cors'); 
require('dotenv').config();
const server = express();

server.use(cors())
const PORT = process.env.PORT;
const moduleWeather=require('./weather')
const moduleMovie =require('./movies');

// http://localhost:3010/
server.get('/', (req, res) => {
    res.send('home Page');
    
});

// http://localhost:3010/weather/?city=Amman
server.get('/weather',moduleWeather);

//http://localhost:3010/movies?query=amman
server.get('/movies',moduleMovie);


server.get('*', (req, res) => {

    res.status(404).send(' Page Not found');
});

server.listen(PORT, () => {
    console.log(`im listening on ${PORT}`);
});






