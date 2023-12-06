const User = require('../models/User');

const getUser = async (req, res) => {

    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.log(error);
    }
};

module.exports = getUser;