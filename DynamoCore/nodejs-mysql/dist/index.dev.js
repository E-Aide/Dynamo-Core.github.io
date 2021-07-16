"use strict";

var express = require("express");

var app = express();

var path = require('path');

var dotenv = require('dotenv');

var mysql = require("mysql");

var cookieParser = require('cookie-parser');

dotenv.config({
  path: './.env'
});
var db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});
var publicDirectory = "C:\\Users\\stand\\Desktop\\cllgproj\\Dynamo-Core.github.io\\DynamoCore";
app.use(express["static"](publicDirectory));
console.log(publicDirectory);
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
db.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql connected..");
  }
});
app.set('views', "C:\\Users\\stand\\Desktop\\cllgproj\\Dynamo-Core.github.io\\DynamoCore");
app.use('/', require('../routes/pages'));
app.use('/auth', require('../routes/auth'));
app.listen(5000, function () {
  console.log("Server started port 5001");
});