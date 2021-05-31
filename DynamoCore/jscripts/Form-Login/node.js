var mysql = require('mysql');
var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');

var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	
});

con.connect(function(err) {
	try{
		if (err) throw err;
	    console.log("Connected!");}
	catch(error)
	{console.log(err);}
	
	
  });

