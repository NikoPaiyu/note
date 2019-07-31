const mongoose = require('mongoose');
const Schema = mongoose.Schema ;


let Todo = new Schema({
    title: {
        type : String
    },
    todoListArr : {
        type : Array
    },
    completedTodoListArr : {
        type: Array
    },
    pendingTodoListArr : {
        type : Array
    },
    completedTodoListCount : {
        type : Number 
    },
    pendingTodoListCount : {
        type : Number
    },
    createdData : {
        type : String
    }
},{
    collection : 'Todo'
})

module.exports = mongoose.model('Todo',Todo);