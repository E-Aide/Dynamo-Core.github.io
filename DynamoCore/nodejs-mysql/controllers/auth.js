const mysql = require("mysql");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
 
 exports.login = async (req,res) => {
     try{
         const email = req.body.email;
         const pass = req.body.pass;

         if(!email || !pass){
            //send to fill pass and email
         }

         db.query('SELECT *From userinfo email = ?', [email], async (error,results) =>{
             if(!results || !(await bcrypt.compare(password, results[0].password))) {
                 //res.status(401).render(loginfile)
             }
         })

     }catch(error) {
         console.log(error);
     }
 
 } 
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

    db.query('INSERT INTO userinfo SET ? ',{username: name, email: email, conactNo: contactNo, password: hashedPassword });
    if(error){
        console.log(error);
    } else {
        return res.render('/views/FORMS/sign_in');
    }


});
 }