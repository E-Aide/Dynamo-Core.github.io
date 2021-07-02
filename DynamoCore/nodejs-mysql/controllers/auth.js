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

         db.query('SELECT * FROM userinfo WHERE email = ?', [email], async (error,results) =>{
             if(error){
                 console.log(error);
             }
             if(!results || !(pass=== results[0].password)) {
                 console.log(results[0].password);
                 console.log(pass, 8);
               res.status(401).render('DynamoCore');
             }else {
                 const id = results[0].username;
                 const token = jwt.sign({id}, process.env.JWT_SECRET, {
                     expiresIn: process.env.JWT_EXPIRES_IN
                 });

                 console.log("The token is " + token);

                 const cookieOptions = {
                     expires: new Date( Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60),
                     httpOnly: true
                 }
                 res.cookie('jwt', token, cookieOptions );
                 res.status(200).redirect('DynamoCore');
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
        return res.render('DynamoCore');
    }


});
 }