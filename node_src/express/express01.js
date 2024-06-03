const express = require('express');
const app = express()
const path = require('path');

app.use("/html2", express.static(path.join(__dirname, "html")));

app.get('/', function(req, res){
    console.log("경로 : ", path.join(__dirname, "html"));
    res.send('Hello world');
});

app.get('/home', function(req,res){
    res.sendFile(__dirname+'/home.html');
});
// app.get('/grape:name', );