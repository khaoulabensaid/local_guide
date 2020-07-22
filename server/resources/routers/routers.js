var express = require('express');
var router = express.Router();

var userController = require('../controllers/controller');

router.post('/signup', userController.signup);
router.post('/signin', userController.login);

module.exports = router;

