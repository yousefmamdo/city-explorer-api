'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weather  = require('./assets/weather.json');

const server = express();
server.use(cors());

const PORT = process.env.PORT;



// http://localhost:3010/weather?searchQuery=Amman&lat=''&lon=''
server.get('/weather',(req,res)=>{
    const name = req.query.searchQuery;
    const lat = req.query.lat;
    const lon = req.query.lon;
    try{
        const result = weather.find( (item) =>{
            if(item.city_name === name && item.lat === lat && item.lon === lon){
              return item;
            }        
        
    })

    let data = result.data.map(item=>{
    
   
        return new Forcast(item);
    })

    res.send(data);
  }
  catch{
    res.send('404 Not Found');
  }
})

class Forcast {
  constructor(item){
    this.date = item.valid_date;
    this. description= `Low of ${item.low_temp}, high of ${item.max_temp} with broken clouds${item.weather.description}` ;
  }
}

// to make our server listen on PORT
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})