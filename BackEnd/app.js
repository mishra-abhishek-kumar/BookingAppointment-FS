const express = require('express');

//import required to create environment variables
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//import required to parse JSON data as a POST request
const bodyParser = require('body-parser');

//imports required for DB connection and table creation
const sequelize = require('./util/database');
const User = require('./models/User'); //Without this table was not getting created

//imports requires for different routes
const createUserRoute = require('./routes/create-user');
const getUserRoute = require('./routes/get-user');
const updateUserRoute = require('./routes/update-user');
const deleteUserRoute = require('./routes/delete-user');

const app = express();

app.use(bodyParser.json());

app.use('/', createUserRoute);
app.use('/', getUserRoute);
app.use('/', updateUserRoute);
app.use('/', deleteUserRoute);

const PORT = process.env.PORT;

sequelize.sync() //sync is used to create tables in DB, available in models
    .then(result => {
        app.listen(PORT, () => {
            console.log("Listening at port:", PORT);
        });
    })
    .catch(err => console.log(err));