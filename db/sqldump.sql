CREATE TABLE users (
  id int(11) NOT NULL,
  firstName varchar(255) default NULL,
  lastName varchar(255) default NULL,
  favourite_movies varchar(255) default NULL
);

INSERT INTO users (id,firstName,lastName,favourite_movies)
    VALUES
        (1,'Anona','Cruz','tt0848228,tt4154756,tt2395427,tt4154796'),
        (2,'Camilla','Sayer','tt4154756,tt10515848,tt0120575'),
        (3,'Ganesh','Zentai','tt0287871,tt2975590,tt0103776,tt4116284,tt2313197'),
        (4,'Vivien','Straub','tt0926084,tt0417741'),
        (5,'Bernardita','Bishop','tt0389860');