const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../src/environments/DB');
const passport = require('passport');
require('./config/passport');

// Todo Route
const todoRoute = require('./routes/todo.route');

// Initalizing Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser : true}).then(
    () => {console.log('DataBase is Connected')},
    err => {console.log('Cannot connect to Database' + err)}
);


// Initalizing Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/todo',todoRoute);

const port = process.env.PORT || 4000 ;
app.listen(port , () => {
    console.log('Listening to 4000');
});

