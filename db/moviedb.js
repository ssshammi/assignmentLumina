const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/moviedb.sqlite3'
    }
});
 
 function  getUsers () {
    return  knex("users").select("*");
/*knex.select("*").from("users")
    .then(function (users) {
        return users;
        users.forEach((user) => { //use of Arrow Function
            console.log({ ...user });
        });
    }).catch(function (err) {
        // All the error can be checked in this piece of code  
        console.log(err);
        return {};
    }).finally(function () {
        // To close the connection pool  
        knex.destroy();
    });
*/
};

function addUser(user) {
    return knex("users").insert(user);
};

function updateUserMovie(Id, f_movies){
    return knex("users").where({ id: Id }).update({ favourite_movies: f_movies })
};

module.exports = {
    getUsers,
    addUser,
    updateUserMovie
};