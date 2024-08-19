const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret : "Animal",
}));

app.get("/setUser", (req,res)=>{
    req.session.user = {name : "kim", age : 5};
    res.redirect("/getUser");
})

app.get("/getUser", (req,res)=>{
    res.send(req.session.user);
})

app.get("/deleteSession", (req,res)=>{
    if(req.session){
        req.session.destroy(()=>{
            res.redirect("/getUser");
        })
    }else{
        res.send("제거할 세션이 없습니다.");
    }
})

// 1. /setUSer/yoon => user name이 yoon으로 등록되게 라우터 만들기
// 2. / => 루트 라우터일때 세션이 있는지 없는지 안내하기.

app.listen(8889, ()=>{
    console.log("8889 포트입니다.");
})