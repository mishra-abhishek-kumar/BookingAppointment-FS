const User = require('../models/User');

const createUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    .then(result => {
        console.log(result);
        res.send(result);
    })
    .catch(err => console.log(err));
};

module.exports = createUser;