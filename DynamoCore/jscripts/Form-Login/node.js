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

function SignUP(){
	var userName= document.getElementById('username').value;
	var password= document.getElementById('pass').value;
	var Email= document.getElementById('email').value;
	var contactNo= document.getElementById('contactNo').value;
	//var profileImg= document.getElementById('username').value;

	var sql = "INSERT INTO userInfo (username, email, passwd, contactno, profileImg, accType) VALUES ("+ userName+","+Email+","+password+","+contactNo+ ")";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}
