const express = require("express");
const needle = require("needle");
const port = process.env.PORT || 8080;
const App = express();
const omdbURL = "http://www.omdbapi.com/";
let param = {
  apikey: "6694fd2f",
};

const moviedb = require("./db/moviedb");

App.get("/", async (request, response) => {
  var randomMovie = {};
  console.log("nothing");

  param.i = "tt3896198";
  randomMovie = await needle("get", omdbURL, param, { json: false })
    .then(function (res) {
      return res.body;
    })
    .catch(function (err) {
      console.log("Error " + err);
    });

  console.log(randomMovie.Title);
  response.send("see console" + randomMovie.Title);
});

App.get("/users", async (request, response) => {
  //console.log("movieDB");
  //database call works fine
  let userlist = await moviedb.getUsers();
  //console.log(userlist);


  let userMovieList = await getMovieUserObj(userlist);


  // Promise.resolve(userMovieList);
  console.log(userMovieList[0]);

  //console.log(userlist);
  //response.send("see console" + userMovieList)[2];
  //response.end();
  response.status(201).json(userMovieList);
});

function getMovieUserObj(userlist) {
  return Promise.all(userlist.map(async (user) => {

    let movieInfoObj = await getMovieData(user.favourite_movies);
    //console.log(movieInfoObj);
    return {
      id: user.id,
      name: user.firstName + " " + user.lastName,
      favourite_movies: movieInfoObj,
    };
  }
  ));
}


async function getMovieData(favourite_movies) {
  var favMovies = [];
  var movieArray = favourite_movies.split(",");
  var itemsProcessed = 0;

  return Promise.all(movieArray.map(async function (movieID) {

    param.i = movieID;

    return await needle("get", omdbURL, param, { json: false })
      .then(function (res) {
        //return res.body;
        let movieDetail = res.body;
        let tempObj = {
          ID: movieDetail.imdbID,
          Title: movieDetail.Title,
          Year: movieDetail.Year,
          Plot: movieDetail.Plot,
          Poster: movieDetail.Poster,
        };
        // console.log("short details of movie" + tempObj.ID);
        //console.log(tempObj);
        return tempObj;
      })
      .catch(function (err) {
        console.log("Error " + err);
        return [];
      });

    return movieOb;
  }));
}

App.listen(port, () => {
  console.log(`Listening to port :${port}  `);
});
//database

///client api
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=6694fd2f
//key: 6694fd2f
//users and movie list
//movies list keywork, year
// search movie http://www.omdbapi.com/?s=Toxic&type=movie&page=2&apikey=6694fd2f
//login user
//my movie
//remove movie
// movies list by keyword, year
//add movie
