const User = require('../models/User');

const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findByPk(userId);
        const result = await user.destroy();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = deleteUser;