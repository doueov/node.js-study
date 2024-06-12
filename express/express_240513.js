//npm i cookie-parser
//cookie parser 미들웨어 -> 요청 쿠키를 추출할 수 있다.
//request 객체와 response객체에 cookies 속성과 cookie라는 메서드가 부여된다.

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cookieParser());

app.get('/',(request,response)=>{
    if(request.cookies.user){
        response.send("쿠키 데이터가 있습니다. /getUser를 사용하여 쿠키를 확인하세요.");
    }else{
        response.send("쿠키가 없습니다. /setUser를 사용하여 쿠키를 설정하세요.");
    }
});

app.get('/getUser',(request,response)=>{
    response.send(request.cookies);
});
app.get('/setUser',(request,response)=>{
    //쿠키 생성
    response.cookie("st1","abc");
    response.cookie("user",{
        name :"kim",
        age : 5
    });
    response.redirect("/getUser");
})


app.get('/setUser/:nameId',(request,response)=>{
    //쿠키 생성
    response.cookie("st1","abc");
    response.cookie("user",{
        name :request.params.nameId
    });
    response.redirect("/getUser");
})

app.get('/deleteCookie', (req, res) => {
    if(req.cookies.user){
        res.clearCookie("user");
        res.redirect('/');
    }
    else {
        res.send('제거할 쿠키가 없습니다.');
    }
})
app.listen(8889,function(){
    console.log("8889 포트입니다.");
});

