// npm i express
// npm i cookie-parser

const express = require('express');
const cookieParser = require("cookie-praser");
const app = express();

app.use(cookieParser());

// 쿠키 제거 관련
app.get("/", (req,res)=>{
    if(req.cookies.user){
        res.send("쿠키 데이터가 있습니다. /getUser를 이용하여 쿠키를 확인하세요.")
    }else{
        res.send("쿠키 데이터가 없습니다. /setUser를 이용하여 쿠키를 설정하세요.")
    }
});

app.get("/deleteCookie", (req,res)=>{
    if(req.cookies.user){
        res.clearCookie("user");
        res.redirect("/");
    }else{
        res.send("제거할 쿠키가 없습니다.");
    }
})

// 쿠키 설정 관련
app.use("/setUser", (req, res) => { 
    res.cookie("user", {
        name: "kim",
        age: 5
    });
});
res.redirect("/getUser");

app.use('/getUser', (req, res)=>{
    res.send(req.cookies);
})

app.listen(8889, function(){
    console.log("8889 포트입니다.");
});

