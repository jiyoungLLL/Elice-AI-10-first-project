const router=require("express").Router();
const {CertificateModel}=require("../db/all-models")
const {validateCertificationData}=require("../middlewares")
  
router.post("/", validateCertificationData("body"), async (req, res, next) => {
  try {
    console.log("자격증 정보 추가하는 중...");

    const { type,date,authority } = req.body;
    const userId= req.user._id;
    const createdPost = await CertificateModel.create({ type,date,authority, userId });

    res.status(201).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

  
router.put("/:id",validateCertificationData("body"), async (req, res, next) => {
  try {
    console.log("자격증 정보 수정하는 중...");

    const { id } = req.params;
    const { type,date,authority }= req.body; 

    const updatedPost = await CertificateModel.findOneAndUpdate(
      { _id: id },
      { type,date,authority }, 
      {
        runValidators: true,
        new: true,
      }
    ).lean();

    res.status(201).json({ data: updatedPost, error: null });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log("자격증 정보 삭제하는 중...");

    const { id } = req.params;
    const deletedPost = await CertificateModel.findOneAndDelete({ _id: id }).lean();

    if (!deletedPost ) {
      return res.status(404).json({ error: "Award not found" });
    }

    res.json({ message: "Award deleted successfully",  error: null });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;