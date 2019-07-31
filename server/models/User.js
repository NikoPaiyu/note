const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

let User = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    hash : String,
    salt : String
},{
    collection : 'User'
});

User.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');
}

User.method.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');
    return this.hash = hash;
}

User.methods.generateJwt = function(){
    var expiry = new Date();

    expiry.setDate(expiry.getDate + 7);

    return jwt.sign({
        _id : this._id,
        username : this.username,
        exp : parseInt(expiry.getTime() / 100),
    },"MY_SECERT")

}

module.exports = mongoose.model('User',User);