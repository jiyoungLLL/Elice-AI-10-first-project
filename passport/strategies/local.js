const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../../db/models/user-model');
const bcrypt = require('bcrypt');

const config = {
    usernameField: 'email',
    passwordField: 'password',
};

const local = new LocalStrategy(config, async (email, password, done) => {
    try {
        // Match User
        const user = await UserModel.findOne({ email });
        if(!user) {
            done(null, false, { message: 'That email is not registered'});
            return;
        }
        // Match Password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if(!isMatch) {
                done(null, false, {message: 'Password incorrect'});
                return;
            }
            done(null, user);   // login 라우터의 passport 미들웨어에 사용자 인증 성공했음을 user 정보와 함께 전달 (라우터가 받는 user 정보: req.user)
            // return user;    // 이제 이 부분 없어도 잘 동작하나 혹시 몰라 삭제하지 않고 주석 처리함
        });
    } catch(error) {
        done(error, null);
    }
});

module.exports = local;