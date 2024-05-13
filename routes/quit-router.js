const { Router } = require('express');
const { UserModel, DeletedUserModel } = require("../db/all-models");
const router = Router();
const { validateToken } = require("../middlewares");

router.post("/", validateToken, async (req, res, next) => {
    try {
        const userId = req.user._id;

        const user = await UserModel.findOne({ _id: userId });

        if (user) {
            let {_id, name, email, password, profilePic}= user
            let deletedAt=Date.now()
            const deletedUser = await DeletedUserModel.create({name, email, password, profilePic, deletedAt, userId:_id});
            await UserModel.findOneAndDelete({ _id });

            res.cookie('token', null, { maxAge: 0 });
            res.status(201).json({ message: "User account transferred and deleted successfully", data: deletedUser.toObject() });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;


