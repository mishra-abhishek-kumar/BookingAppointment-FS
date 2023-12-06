const User = require('../models/User');

const createUser = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    try {
        const result = await User.create({
            name: name,
            email: email,
            phone: phone
        })
        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = createUser;