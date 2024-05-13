const router = require("express").Router();
const {AwardModel,CertificateModel,EducationModel,ProjectModel, UserModel} = require("../db/all-models");
const {validateToken} = require("../middlewares");


router.get("/",validateToken, async (req, res, next) => {
  try {
    console.log("마이페이지 정보 가져오는 중...")

    const userId=req.user._id;
    const userName=req.user.name;
    const userEmail=req.user.email;
 
    const user= await UserModel.find({"_id": userId}).lean()
    const profilePic=user[0].profilePic
    const award = await AwardModel.find( { "userId": userId }).lean();
    const certificate = await CertificateModel.find({ "userId": userId }).lean();
    const education = await EducationModel.find({ "userId": userId }).lean();
    const project = await ProjectModel.find({ "userId": userId }).lean();


    res.json({userId, userName, userEmail, profilePic, award,certificate,education, project, error: null });
  } catch (error) {
    next(error);
  }
});


module.exports=router