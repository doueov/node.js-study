//npm install express
const express = require('express');
const app = express();


// npm install dotenv
const dotenv = require('dotenv').config();

// npm install morgan
const morgan = require('morgan');
app.use(morgan('dev'));

//npm install ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// npm install cors
const cors = require('cors');
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  }));


//공통미들웨어
app.use(express.json());
app.use(express.urlencoded({extended:true}));





// helmet 모듈은 정보보안을 위해서 서버와 클라이언트 간에 중요한 정보가 실수로 전달되지 않도록, 서버에서 다양한 HTTP 헤더를 자동으로 설정해주는 편리한 모듈이다. 
// 즉, 다양한 HTTP 헤더 설정을 통해 서버 어플리케이션의 보안을 강화해주는 아주 착한 모듈이다.
//npm install helmet
const helmet = require('helmet');
app.use(helmet());

const boardRouter = require('./boardRouter.js');
app.use('/board', boardRouter);


//포트 설정
app.set('port',process.env.PORT || 8080);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 실행');
})
