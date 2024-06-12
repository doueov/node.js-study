//npm install express
const express = require('express');
const router = express.Router();

// 테스트를 위한 게시글 데이터
let boardList = [];
let numOfBoard = 1;

// 게시글 API

router.get('/',(req,res)=>{
    res.render('boardList',{data:boardList});
    //res.send(boardList);
});

router.get('/:id',(req,res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id
    });
    res.send(findItem);
});

router.post('/',(req,res)=>{
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

router.put('/:id',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
    //req.params.id 값 찾아 리스트에서 삭제
    const findItem = boardList.find((item) => {
        return item.id == req.params.id 
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx,1);

    //res.redirect('/board');
    res.send("글이 삭제되었습니다.");
});

module.exports = router;