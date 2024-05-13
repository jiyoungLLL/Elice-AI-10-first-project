const router = require("express").Router();
const { ObjectId } = require("mongodb");
const { AwardModel, CertificateModel, EducationModel, ProjectModel, UserModel } = require("../db/all-models");

router.get("/:userId", async (req, res, next) => {
  try {
    console.log("다른 유저 포트폴리오 가져오는 중...");

    const { userId } = req.params;

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid userId" });
    }
    const userInfo=await UserModel.find({"_id":new ObjectId(userId)}).lean()
    console.log(userInfo)
    profilePic=userInfo[0].profilePic
    userName=userInfo[0].name
    userEmail=userInfo[0].email

    const award = await AwardModel.find( { "userId":new ObjectId(userId) }).lean();
    const certificate = await CertificateModel.find({ "userId":new ObjectId(userId) }).lean();
    const education = await EducationModel.find({ "userId": new ObjectId(userId) }).lean();
    const project = await ProjectModel.find({ "userId": new ObjectId(userId) }).lean();

    res.json({ award, certificate, education, project, profilePic, userName, userEmail, error: null });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
