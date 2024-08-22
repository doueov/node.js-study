const express = require('express');
const { body, validationResult } = require("express-validator");

const app = express();
const path = require('path');

// ejs 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 하트코딩된 사용자 정보 (실제로는 데이터베이스나 다른 방식으로 관리해야 한다.)
const users = [
    { username: "admin", password: "password123" },
    { username: "normal", password: "normal1" }
];

// 로그인 페이지 라우트
app.get("/login", (req, res) => {
    res.render("login");
});

// 로그인 처리 라우트
app.post("/login", [
    body("username")
        .isLength({ min: 3, max: 20 })
        .withMessage("아이디는 3자 이상 20자 이하여야 합니다."),
    body("password")
        .isLength({ min: 6, max: 20 })
        .withMessage("비밀번호 6자 이상 20자 이하여야 합니다.")
],
    (req, res) => {
        // 유효성 검증을 하면서 생기는 에려메시지 정보가 없음
        const errors = validationResult(req);
        // 유효성 검증을 하면서 생기는 에러메시지를 받을 수 있음
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, password } = req.body;

        console.log("정보 : ", username, password);

        res.send(username);
    });

app.listen(3000, () => {
    console.log("Server is running");
});