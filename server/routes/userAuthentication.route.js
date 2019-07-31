var jwt = require('express-jwt');
var auth = jwt({
    secret : 'MY_SECERT',
    userProperty : 'payload'
})
const express = require('express');
const app = express();
const authenticationRoutes = express.Router();
const User = require('../models/User');

authenticationRoutes.route('/login').post(function(req,res) {

    


});

