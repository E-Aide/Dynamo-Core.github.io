const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> {
    res.render('Dynamocore');
});

router.get('/community',(req,res)=> {
    res.render('community');
});

router.get('/articles',(req,res)=> {
    res.render('articles');
});

router.get('/Languages',(req,res)=> {
    res.render('LanGuide');
})