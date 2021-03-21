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

  const userlist = await moviedb.getUsers();
  // console.log(userlist);
  var userMovieList = [];
  userMovieList = Object.keys(userlist).forEach(function (user) {
    userMovieList.push({
      id: userlist[user].id,
      name: userlist[user].firstName + " " + userlist[user].lastName,
      favourite_movies: getMovieData(userlist[user].favourite_movies),
    });
  });

  console.log(userMovieList);
  response.send("see console" + userMovieList);
  response.end();
});

async function getMovieData(favourite_movies) {
  var favMovies = [];
  var movieArray = favourite_movies.split(",");
  var itemsProcessed = 0;

  let movieslist = await movieArray.forEach(async function (movieID) {
    param.i = movieID;

    let MovieDetail = await needle("get", omdbURL, param, { json: false })
      .then(function (res) {
        return res.body;
      })
      .catch(function (err) {
        console.log("Error " + err);
      });

    favMovies.push({
      ID: MovieDetail.imdbID,
      Title: MovieDetail.Title,
      Year: MovieDetail.Year,
      Plot: MovieDetail.Plot,
      Poster: MovieDetail.Poster,
    });
    //console.log(favMovies);
    return;
  });
  movieslist
  console.log(favMovies);
  return favMovies;

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
