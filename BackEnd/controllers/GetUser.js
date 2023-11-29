const User = require('../models/User');

const getUser = (req, res) => {
    User.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => console.log(err))
};

module.exports = getUser;