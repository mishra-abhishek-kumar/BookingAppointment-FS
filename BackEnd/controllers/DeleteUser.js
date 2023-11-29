const User = require('../models/User');

const deleteUser = (req, res) => {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
};

module.exports = deleteUser;