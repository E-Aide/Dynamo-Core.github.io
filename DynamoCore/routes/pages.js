const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> {
    
    res.render('DynamoCore');
});

router.get('/Community',(req,res)=> {
    res.render('community');
});

router.get('/Articles',(req,res)=> {
    res.render('articles');
});

router.get('/Languages',(req,res)=> {
    res.render('LangGuide');
});

router.get('/Forms',(req,res)=> {
    res.render('LangGuide');
});

module.exports = router;