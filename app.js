const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

app.get('/api/todos:/id/', function (req, res){
  models.todos.find().then();
});
// put routes here
app.post('/api/todos', function (req, res){
  models.todos.find().then();
});

app.put('/api/todos:/id', function (req, res){
  models.todos.find().then();
});

app.patch('api/todos:/id', function (req, res){
  models.todos.find().then();
});

app.delete('/api/todos:/id', function (req, res){
  models.todos.find().then();
});

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
