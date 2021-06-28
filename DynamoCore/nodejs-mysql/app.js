const express = require("express");
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mysql = require("mysql");

dotenv.config({ path: './.env'});
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = "C:\\Users\\stand\\Desktop\\cllgproj\\Dynamo-Core.github.io\\DynamoCore\\public";
app.use(express.static(publicDirectory));
console.log(publicDirectory);


app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

db.connect( (error) =>{
    if(error) {
        console.log(error)
    }
    else{
        console.log("Mysql connected..");
    }
})

app.set('views', 'C:\\Users\\stand\\Desktop\\cllgproj\\Dynamo-Core.github.io\\DynamoCore\\views');

app.use('/',require('../routes/pages'));


app.listen(5000,()=>{
    console.log("Server started port 5001")
})