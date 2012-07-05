require("./Model/User.js");

//
var databaseUrl = "testdb";
var collections = ["users", "reports"];

var db = require("mongojs").connect(databaseUrl, collections);

var express = require('express');
var app = express.createServer();

//var user = new User("Ralph", "dude@example.com", "pass")

// GetUser
app.get('/getuser/:id', function(req, res){
  
  User.load(req.params.id, function(data){
    res.json(data);
  });
});

// GetUsers
app.get('/getusers', function(req, res){
  
  var users = db.users.find(function(err, data){
    res.json(data);
  });
});

// AddUser
app.get('/adduser', function(req, res){
  var user = new User(req.query['name'], req.query['email'], req.query['password']);
  
  user.save({
    success:function(){
      res.json({result:'success'});
    },
    fail:function(){
      res.json({result:'fail'});
    }
  });
  
})

app.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
