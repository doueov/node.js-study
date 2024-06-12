//npm i express-session
//express-session 

const express = require('express');
const session = require('express-session');
const app = express();


app.use(session({
    secret: "AnimalBannaCandy",
    resave: false, // 새로운 요청 시 세션에 변동사항이없어도 다시 저장할지 설정
    saveUninitialized: true, //세션에 저장할 내용이 없어도 저장할지
    cookie: {
        httpOnly: true,
    },
    //name:'connect.sid'
}));


app.get('/', (request, response) => {
    if (request.session.user) {
        response.send("세션 데이터가 있습니다. /getUser를 사용하여 세션을 확인하세요.");
    } else {
        response.send("세션 데이터가 없습니다. /setUser를 사용하여 세션을 설정하세요.");
    }
});

app.get('/getUser', (request, response) => {
    response.send(request.session.user);
});
app.get('/setUser', (request, response) => {
    request.session.st1 = "abc";
    request.session.user = { name: "kim", age: 5 };
    response.redirect("/getUser");
})


app.get('/setUser/:nameId', (request, response) => {
    //쿠키 생성
    request.session.st1 = "abc";
    request.session.user = { name: request.params.nameId };
    response.redirect("/getUser");
})

app.get('/deleteSession', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            res.redirect('/');
        });
    }
    else {
        res.send('제거할 세션이 없습니다.');
    }
})

app.listen(8889, function () {
    console.log("8889 포트입니다.");
});

