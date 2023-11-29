const router = require('express').Router();
const updateUser = require('../controllers/UpdateUser');

router.put('/update-user/:userId', updateUser);

module.exports = router;