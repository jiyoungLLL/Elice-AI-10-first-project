const awardRouter = require("./award-router");
const certificateRouter = require("./certificate-router");
const educationRouter = require("./education-router");
const projectRouter = require("./project-router");
const postRouter = require("./post-router");
const mypageRouter = require("./mypage-router");
const userRouter = require("./user-router");
const networkRouter = require("./network-router");
const photoRouter = require("./photo-router");
const quitRouter=require("./quit-router");






module.exports = {
    awardRouter,
    projectRouter,
    educationRouter,
    certificateRouter,
    mypageRouter,
    postRouter,
    userRouter,
    networkRouter,
    photoRouter,
    quitRouter
};