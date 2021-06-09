const express = require('express');
const app = express();
const cors = require('cors');
const dotenv= require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({exntendent: false}));


//create 
app.post('/insert', (request, response) => {
    const { name } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewdata(name);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});



//read 
app.get('/getAll',(request,response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    .then((data) => response.json({data :data}))
    .catch((err) =>console.log(err));
    
});



//update 




//delete 
app.listen(process.env.PORT,()=> console.log('app is running'));




//npx nodemon server