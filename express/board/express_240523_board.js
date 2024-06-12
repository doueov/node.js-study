//npm install express
const express = require('express');
const app = express();


// npm install dotenv
const dotenv = require('dotenv').config();

// npm install morgan
const morgan = require('morgan');
app.use(morgan('dev'));


// npm install cors
const cors = require('cors');
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  }));


//포트 설정
app.set('port',process.env.PORT || 8080);


//공통미들웨어
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// 테스트를 위한 게시글 데이터
let boardList = [];
let numOfBoard = 1;

// 게시글 API
app.get('/',(req,res)=>{
    res.send("게시글 API 확인");
});

app.get('/board',(req,res)=>{
    res.send(boardList);
});

app.get('/board/:id',(req,res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id
    });
    console.log("WW",findItem);
    res.send(findItem);
});

app.post('/board',(req,res)=>{
    const board = {
        "id" : numOfBoard++,
        "user_id" : req.body.user_id,
        "date" : new Date(),
        "title" : req.body.title,
        "content" : req.body.content
    };
    boardList.push(board);

    //res.redirect('/board');
    res.send("글이 등록되었습니다.");
});

app.put('/board/:id',(req,res)=>{
    //req.params.id 값을 찾아서 리스트에서 삭제
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx,1);

    //리스트에 새로운 요소 추가
    const board = {
        "id": req.params.id,
        "user_id" : req.params.user_id,
        "date":new Date(),
        "title": req.body.title,
        "content":req.body.content
    };
    boardList.push(board);
    //res.redirect('/board');
    res.send("글이 수정되었습니다.");

});

app.delete('/board/:id',(req,res)=>{
    //req.params.id 값 찾아 리스트에서 삭제
    const findItem = boardList.find((item) => {
        return item.id == req.params.id 
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx,1);

    //res.redirect('/board');
    res.send("글이 삭제되었습니다.");
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 실행');
})
