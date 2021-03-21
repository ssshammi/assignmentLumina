var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/moviedb.sqlite3'
    }
});


knex.select("*").from("users")
    .then(function (users) {
        users.forEach((user) => { //use of Arrow Function
            console.log({ ...user });
        });
    }).catch(function (err) {
        // All the error can be checked in this piece of code  
        console.log(err);
    }).finally(function () {
        // To close the connection pool  
        knex.destroy();
    });