const express = require('express');
const needle = require('needle');
const port = process.env.PORT || 8080;
const App = express();
const omdbURL = 'http://www.omdbapi.com/';
let param ={
    apikey: '6694fd2f'
};


App.get('/', (request,response) =>{

    console.log("nothing");
    
    param.i = 'tt3896198';

    needle.request('get', omdbURL, param, function (err, res, res) {
        if (err) {
            console.log("err: " + err);
            return;
        }
        console.log(res);
        return;
    });
    response.send("see console");
    response.end();
});


App.listen(port , ()=>{

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
       
