const axios=require('axios');


function moduleWeather(req,res){ 

    let name = req.query.city;
    let URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.Weather_APP_Key}`;
    
         axios
         .get(URL)
         .then(ruselt =>{
            let newDay = ruselt.data.data.map((item) => {
                return new Forecast(item);
         })
         res.send(newDay);
            })
            .catch(()=>{
                res.status(404).send(' Not found 404');
            })
        
    }

    function Forecast(day) {
        (this.date = day.valid_date),
            (this.description = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`);
    }

    module.exports=moduleWeather;