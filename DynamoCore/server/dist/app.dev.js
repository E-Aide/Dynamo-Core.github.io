"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var dotenv = require('dotenv');

dotenv.config();

var dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  exntendent: false
})); //create 

app.post('/insert', function (request, response) {
  var name = request.body.name;
  var db = dbService.getDbServiceInstance();
  var result = db.insertNewdata(name);
  result.then(function (data) {
    return response.json({
      data: data
    });
  })["catch"](function (err) {
    return console.log(err);
  });
}); //read 

app.get('/getAll', function (request, response) {
  var db = dbService.getDbServiceInstance();
  var result = db.getAllData();
  result.then(function (data) {
    return response.json({
      data: data
    });
  })["catch"](function (err) {
    return console.log(err);
  });
}); //update 
//delete 

app.listen(process.env.PORT, function () {
  return console.log('app is running');
}); //npx nodemon server