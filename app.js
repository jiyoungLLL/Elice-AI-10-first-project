const express = require('express');
const path = require('path');
const passport = require('passport');
require('./passport')();
const cookieParser = require('cookie-parser');
const { educationRouter, certificateRouter, awardRouter, projectRouter, postRouter, userRouter, mypageRouter, networkRouter, photoRouter, quitRouter } = require("./routes");
const getUserFromJwt = require('./middlewares/get-user-from-jwt');

const app = express();

const cors = require('cors');
app.use(cors({ credentials: true, origin: "http://localhost:5000" }));

// cookie
app.use(cookieParser());  // req 객체에 cookies 속성 부여, 이제 req.cookies 사용 가능

// passport
app.use(passport.initialize());

// EJS
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static path
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'))

app.use(getUserFromJwt);  // 모든 요청마다 쿠키에서 jwt 인증

app.use('/', userRouter);
app.use("/posts", postRouter);
app.use("/mypage", mypageRouter);
app.use("/mypage/education", educationRouter);
app.use("/mypage/certification", certificateRouter);
app.use("/mypage/award", awardRouter);
app.use("/mypage/project", projectRouter);
app.use('/network', networkRouter)

app.use('/photo', photoRouter);

app.use('/quit', quitRouter)

// application middleware
// app.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.statusCode = 404;
//   next(error);
// });

// error handling middleware
app.use((error, req, res, next) => {
    console.error(error);
    const statusCode = error.statusCode ?? 500;
    let message = error.message;
    if (statusCode === 500) {
      message = "Internal Server Error";
    }
    res.status(statusCode).json({
      data: null,
      error: message,
    });
  });

exports.app = app;