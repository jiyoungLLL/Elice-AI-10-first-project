const router = require("express").Router();
const {UserModel}=require("../db/all-models.js")
const baseUrl =require('../network/base-url.js')
const {multerSetup}= require("../middlewares")

router.post("/", multerSetup, async (req, res, next) => { 
   try{
    if (req.fileValidationError) { 
      return res.status(400).json({
          error: req.fileValidationError, 
          });
        }
    else{
     console.log("success")

     const userId=req.user._id;
     console.log(req.file.path)
     const newUser= await UserModel.findOneAndUpdate({ _id: userId }, { profilePic: baseUrl+"/"+req.file.path });
     req.user.profilePic=newUser.profilePic
     console.log(res.req.file.path)

     return res.status(200).json({
       success: true,
       image: res.req.file.path,
       fileName: res.req.file.filename,
    })
  };
   }catch(error){
    return next(error);
   }
 });


module.exports = router;



