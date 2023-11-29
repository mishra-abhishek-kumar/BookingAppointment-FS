const express = require('express');

//import required to parse JSON data as a POST request
const bodyParser = require('body-parser');

//imports required for DB connection and table creation
const sequelize = require('./util/database');
const User = require('./models/User'); //Without this table was not getting created

//imports requires for different routes
const createUserRoute = require('./routes/create-user');
const getUserRoute = require('./routes/get-user');

const app = express();

app.use(bodyParser.json());

app.use('/', createUserRoute);
app.use('/', getUserRoute);

sequelize.sync()
    .then(result => {
        app.listen(4000, () => {
            console.log("Listening at port: 4000");
        });
    })
    .catch(err => console.log(err));