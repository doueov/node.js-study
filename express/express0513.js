const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    if(req.cookies.user) {
        res.send("쿠키 데이터가 있습니다. /getUser를 이용하여 쿠키를 확인하세요.");
    }else {
        res.send("쿠키 데이터가 있습니다. /setUser를 이용하여 쿠키를 확인하세요.");
    }
});

app.get("/deleteCookie", (req, res) => {
    if(req.cookie.user) {
        res.clearCookie("user");
        res.redirect("/");
    }else {
        res.send("제거할 쿠키가 없습니다.")
    }
});

app.get("/setUser", (req, res) => {
    res.cookie("user", {
        name: "kim",
        age: 5
    });
    res.redirect("/getUser");
});

app.get("/getUser", (req, res) => {
    res.send(req.cookies);
});

app.get("/setUser/:nameId", (req, res) => {
    res.cookie("user", {
        name: req.params.nameId,
        age: 5
    });
    res.redirect("/getUser");
});

app.listen(8889, function() {
    console.log("8889 포트입니다.");
});