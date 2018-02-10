var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_api = require('../apis/users_api');

router.get('/sign-out', users_api.logOutUser);

// router.post('/login', , users_api.loginUser);

router.post('/login', users_api.loginUser);

router.post('/signup', users_api.signUp);

module.exports = router;