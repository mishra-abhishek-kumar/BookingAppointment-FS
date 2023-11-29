const router = require('express').Router();
const getUser = require('../controllers/GetUser');

router.get('/get-user', getUser);

module.exports = router;