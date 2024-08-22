const express = require('express');
const { body, validationResult } = require("express-validator");

const app = express();
const path = require('path');

// ejs 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 로그인 페이지 라우트
app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(3000, () => {
    console.log("Server os running");
})