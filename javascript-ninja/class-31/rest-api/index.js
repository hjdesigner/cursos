'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('cors');
var app = express();

var users = {
  joao: {
    username: 'João',
    age: 30
  },
  maria: {
    username: 'Maria',
    age: 22
  },
  henrique: {
    username: 'Henrique',
    age: 27
  }
}
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', function(req, res) {
  res.send('<h1>Home</h1>');
});

app.get('/user', function (req, res) {
  res.send('<h1>User</h1>');
});

app.get('/user/:username', function (req, res) {
  var username = req.params.username;
  if (users[username]){
    return res.json(users[username]);
  }
  res.status(404).json({ error: 'Usuário não cadastrado' });
});

app.post('/user', function(req, res) {
  var username = req.express.username;
  var age = req.express.age;
  res.json({ username: username, age: age });
});

app.listen(3000);