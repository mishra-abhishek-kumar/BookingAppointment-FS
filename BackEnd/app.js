const express = require('express');

const sequelize = require('./util/database');
const User = require('./models/User');

const app = express();

app.use('/', (req, res) => {
    console.log("Hello from express");
});

sequelize.sync()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));


app.listen(4000, () => {
    console.log("Listening at port: 4000");
});