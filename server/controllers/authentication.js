var passport = require('passport');
var mongoose = require('mongoose');
const User = require('../models/User');

module.exports.register = function(req,res) {

    var user = new User();

    user.username = req.body.username;

    user.setPassword(req.body.password);

    user.save(function(err){

        var token ;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    });
}

module.exports.login = funciton(req,res) {

    passport.authenticate('local',function(err,user,info) {

        // If Passport throws error
        if(err){
            res.status(400).json(err);
            return;
        }

        // If a User found
        if(user){
            token = User.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });

        } else {

            // If a User not Found
            res.status(401).json(info);

        }

    })(req,res);
}
