const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const fileFilter = (req, file, cb) => {
    const fileSize = parseInt(req.headers["content-length"]) 
    if(file.mimetype.substring(0,5)!=='image'){
        req.fileValidationError = "파일 형식이 맞지 않습니다.";
        return cb(null, false, req.fileValidationError);
        }
    else if(fileSize>200000) {
        req.fileValidationError = "이미지는 200KB보다 작아야합니다.";
        return cb(null, false, req.fileValidationError);
    }
    else cb(null, true) 
  }

const multerSetup=multer({ storage: storage, fileFilter: fileFilter }).single("profilePhoto"); 

module.exports = multerSetup;
