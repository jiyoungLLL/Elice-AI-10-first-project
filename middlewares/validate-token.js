validateToken = function(req,res,next){

	if (!req.user) { // 토큰이 없을 때
		return res.status(401).json({
		  msg: "권한이 없습니다."
		});
	  }
	next();
};

module.exports = validateToken;