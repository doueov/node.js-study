const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
//("키","값",{속성})
  res.cookie("cookie","chickchock",{
    maxAge:500000
  });
  res.send("<h1>홈입니다.</h1>");
});

app.get("/cookie",(req,res)=>{
  const c1 = req.cookies.cookie;
  console.log(c1);
  res.send(`<h1>쿠키페이지입니다.</h1><br/>${c1}`);
});

app.get("/clear",(req,res)=>{
  res.clearCookie("cookie");
  res.send(`<h1>쿠키가 삭제되었습니다.`);
});



app.listen(3000);

/*
쿠키키 name , 쿠키값 김윤지

/ : 홈입니다.
쿠키값이 있으면 => 김윤지입니다.
없으면 => 로그인되지 않았습니다.

/login : 쿠키 키값 이름으로 설정
/logout : 쿠키 값 제거

*/