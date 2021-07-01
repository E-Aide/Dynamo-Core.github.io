const mysql = require("mysql");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
 
 exports.register = (req, res) => {
     console.log(req.body);

     const name = req.body.userName;
     const email = req.body.email;
     const pass = req.body.pass;
     const conPassw = req.body.conPassw;
     const contactNo = req.body.contactNo;
 
 db.query('SELECT email FROM userinfo WHERE username = ?', [name], async(error, results) => {
    if(error){
        console.log(error);
    }
    if(results.length > 0){
        console.log("Data redundancy")
    }
    else if(pass !== conPassw){
        return console.log("PAssword not same");
    }
    
    let hashedPassword = await bcrypt.hash(pass, 8);
    console.log(hashedPassword);

    db.query('INSERT INTO userinfo SET ? ',{username: name, email: email, conactNo: contactNo, password: pass });
    if(error){
        console.log(error);
    } else {
        return res.render('/views/FORMS/sign_in');
    }


});
 }