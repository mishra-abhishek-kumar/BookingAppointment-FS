const User = require('../models/User');

const updateUser = (req, res) => {
    const userId = req.params.userId;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    User.findByPk(userId)
        .then(user => {
            user.name = name;
            user.email = email;
            user.phone = phone;
            return user.save(); //It will make sure to make the changes to DB & returns a Promise
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
};

module.exports = updateUser;
