const express = require('express');
const app = require('express');
const todoRoutes = express.Router();

// Require Todo Model
let Todo = require('../models/Todo');

todoRoutes.route('/getTodoData').get((req,res) => {

    Todo.find((err,todos) => {

        if(err) {
            res.send('Error Encontered');
        } else {
            res.json(todos);
        }
        
    });

});

todoRoutes.route('/newTodo').post((req,res) => {

    let todo = new Todo(req.body);

    console.log(todo);
    todo.save().then(Todo => {
        res.json({'Success': 1});
    }).catch(err => {
        res.status(400).send('Error Enconteredd' + res);
    });
});

module.exports = todoRoutes ;