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

 const boardRouter = require('./board_router');
 app.use('/', boardRouter);