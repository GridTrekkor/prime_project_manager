var express = require('express');
var router = express.Router();
var path = require('path');

var makeEmployees = require("../makeEmployees");


router.get( '/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../public/views/index.html'));
});


router.get('/makeEmployees', function(req, res, next){
    var employee = makeEmployees("initial");
    //console.log(employee);
    res.send(employee);
});

router.get('/addEmployees', function(req, res, next){
    var employee2 = makeEmployees("add");
    //console.log( employee2);
    res.send(employee2);
});

module.exports = router;