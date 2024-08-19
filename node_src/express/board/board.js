const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

const morgan = require("morgan");
app.use(morgan('dev'));

const cors = require("cors");
app.use(cors({
    origin: "https://127.0.0.1:5500",
    credentials: true
}));

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), "번 포트에서 서버 실행")
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 게시글 데이터
let boardList = [];
let numOfBoard = 1;

// 게시글 API
app.get('/', (req, res) => {
    res.send("게시글 API 확인");
});

app.get("/board", (req, res) => {
    res.send(boardList);
});

app.post("/board", (req, res) => {
    const board = {
        "id": numOfBoard++,
        "user_id": req.body.user_id,
        "date": req.body.date,
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);
    res.send("글이 등록 되었습니다.");
});

app.delete("/board/:id", (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == req.params.id
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);
    res.send("글이 삭제되었습니다.");
});

app.put("/board/:id", (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    const boardIndex = boardList.findIndex(board => board.id == id);
    if (boardIndex !== -1) {
        boardList[boardIndex] = {
            ...boardList[boardIndex],
            title: title || boardList[boardIndex].title,
            content: content || boardList[boardIndex].content
        };
        res.send("글이 업데이트 되었습니다.");
    }
});
