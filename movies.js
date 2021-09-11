const axios=require('axios');
let myMemory={};


function moduleMovie(req,res){ 
    
    let name = req.query.query;

    if(myMemory[name]!==undefined)

    {
      res.send(myMemory[name]);
    }
       
    else {

        let URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.movie_APP_Key}&language=en-US&page=1&include_adult=false&query=${name}`;

        axios
        .get(URL)
        .then (ruselt => {
            let newMovie = ruselt.data.results.map((item) => {

                return new movie(item);
        })
        myMemory[name]=newMovie;

        res.status(200).send(newMovie);
        })
        .catch(()=>{
            res.status(404).send(' Not found 404');
        })

    }

    }


    function movie(item) {
      (this.title = item.original_title),
      (this.image_url = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`),
      (this.overview = item.overview),
        (this.average_votes = item.vote_average),
        (this.total_votes = item.vote_count),
        (this.popularity = item.popularity),
        (this.released_on = item.release_date);
    }

    module.exports=moduleMovie;