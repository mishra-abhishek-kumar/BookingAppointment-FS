const router = require('express').Router();
const deleteUser = require('../controllers/DeleteUser');

router.delete('/delete-user/:userId', deleteUser);

module.exports = router;