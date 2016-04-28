var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var User=require('../models/user.model');
//console.log(User);
// var db=mongoose.connect('mongodb://localhost/login');
// console.log(db);
var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017/function', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
  //  db.close();
});

/* GET home page. */
router.post('/', function(req, res) {
  var user=new User();
  user.username=req.body.username;
  user.password=req.body.password;
  user.hash="string";

  user.save(function(err) {
    console.log();
    if (err){
      console.log('Error in Saving user: '+err);
      throw err;
    }
    console.log(user.username + ' Registration succesful');
  });
  User.find({username:req.body.username},function(err,user){
    if(err){
      console.log(err);
    }
    else{
      console.log(user.username);
    }
  })


  res.send(req.body.username);
});

module.exports = router;
