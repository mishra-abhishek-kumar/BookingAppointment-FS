const router = require('express').Router();
const createUser = require('../controllers/CreateUser');

router.post('/create-user', createUser);

module.exports = router;