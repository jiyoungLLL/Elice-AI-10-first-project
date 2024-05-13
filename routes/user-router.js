const { Router } = require('express');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const UserModel = require("../db/models/user-model.js");
const loginRequired = require('../middlewares/login-required.js');

const router = Router();

// Root Page
router.get('/', (req, res) => {
  if (req.user) { // getUserFromJwt: passport authenticate jwt 과정에서 user 정보 받아오기
    res.redirect('/personal');  // user 정보 있으면 로그인 했던 사용자로 판단, '/personal' 경로로 이동
    return;
  }
  res.redirect('/login'); // user 정보 없으면 로그인 하지 않은 사용자로 판단, '/login' 경로로 이동
})

// Login Page
router.get('/login', (req, res) => {
  res.render('index'); // render views_ejs/index.ejs
});

// Login Handle
// router.post('/login', 
//   passport.authenticate('local', { session: false }), // Compare email and password with the database
//   async (req, res, next) => {
//     try {
//       // Check if the user has a non-null deletedAt field
//       if (req.user.deletedAt !== null) {
//         // If deletedAt is not null, user is considered "deleted", so don't allow login
//         return res.status(401).json({ message: "이미 탈퇴한 회원입니다." });
//       }

//       // Generate JWT token
//       const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
//       const token = jwt.sign(req.user.toJSON(), secretKey);
//       res
//         .cookie('token', token) // 쿠키에 'token'이라는 이름으로 JWT 저장
//         .status(200)
//         .json(req.user);  // 클라이언트에게 응답 정보 전송, 이 부분이 없으면 /personal 경로로 이동하지 않는 오류 발생
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.post('/login', 
  passport.authenticate('local', {session: false}), // 데이터베이스와 email, password 비교
  (req, res, next) => {
    try {
      // JWT
      const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
      const token = jwt.sign(req.user.toJSON(), secretKey);
      res
        .cookie('token', token) // 쿠키에 'token'이라는 이름으로 JWT 저장
        .status(200)
        .json(req.user);  // 클라이언트에게 응답 정보 전송, 이 부분이 없으면 /personal 경로로 이동하지 않는 오류 발생
    } catch (error) {
      next(error);
    }
  }
);




// Register Page
router.get('/register', (req, res) => { 
    res.render('register');
});

// Register Handle
router.post('/register', async (req, res) => {
  try {

    const { email, password, name } = req.body;

    if( !email || !password ) {
      console.log('이메일과 패스워드를 입력해주세요.');
      return res
        .status(400)
        .json({ message: "이메일과 패스워드를 입력해주세요." });
    }

    const UserDB = await UserModel.findOne({email});
    
    if(UserDB) {
      console.log('이미 존재하는 이메일입니다');
      return res
          .status(400)
          .json({
            success: false, 
            message: "이미 사용 중인 이메일입니다." 
      });
    } 

    const Salt = 10;
    const hashedPassword = await bcrypt.hash(password, Salt);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
      name,
    });

    await newUser.save();
    
    return res
      .status(200)
      .json({ message: "User Registration Success!", newUser});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error creating user" });
  }
});

// Logout Handle
router.get('/logout', (req, res, next) => {
  res.cookie('token', null, { maxAge: 0, });  // 쿠키에서 jwt 삭제, 쿠키 만료 시간: 0
  res.redirect('/');  // '/' 경로로 이동, getUserFromJwt: passport authenticate jwt 과정에서 user 정보를 받아올 수 없으므로 '/login' 경로로 바로 이동
});

// Personal Page
router.get('/personal', loginRequired, (req, res) => {
  res.render('personal'); // render views_ejs/personal.ejs
});

router.get('/otheruser/:userId', (req, res) => {
  res.render('otheruser.ejs');
});

router.get('/networked', loginRequired, (req, res) => {
  res.render('network.ejs');
});

router.get('/reset', (req, res) => {
  res.render('reset.ejs');
});

router.post('/reset', async (req, res) => {
  // 기존 email, password 검증
  const user = await UserModel.findOne({ email: req.body.originalEmail });
  if (!user) {
    res
      .status(401)
      .json({ errorMessage: '기존에 설정한 이메일이 아닙니다.'});
    return;
  }
  const isPasswordMatch = await bcrypt.compare(req.body.originalPassword, user.password);
  if (!isPasswordMatch) {
    res
      .status(401)
      .json({ errorMessage: '기존에 설정한 비밀번호가 아닙니다.'});
    return;
  }
  // 새로운 email, password 적용
  const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
  if (req.body.newEmail !== req.body.originalEmail && req.body.newPassword !== req.body.originalPassword) {
    await UserModel.updateOne({ email: req.body.originalEmail }, {
      email: req.body.newEmail,
      password: hashedPassword,
      emailResetAt: Date.now(),
      passwordResetAt: Date.now(),
    });
  }
  if (req.body.newEmail !== req.body.originalEmail && req.body.newPassword == req.body.originalPassword) {
    await UserModel.updateOne({ email: req.body.originalEmail }, {
      email: req.body.newEmail,
      password: hashedPassword,
      passwordResetAt: Date.now(),
    });
  }
  if (req.body.newPassword !== req.body.originalPassword && req.body.newEmail == req.body.originalEmail)
  await UserModel.updateOne({ email: req.body.originalEmail }, {
    email: req.body.newEmail,
    password: hashedPassword,
    passwordResetAt: Date.now(),
  });
  res
    .cookie('token', null, { maxAge: 0, })
    .status(200)
    .json({ successMessage: '회원 정보가 변경되었습니다.'});
});

module.exports = router;