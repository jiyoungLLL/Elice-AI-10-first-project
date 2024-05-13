const mongoose = require('mongoose');

const DeletedUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default: "https://cdn.imweb.me/thumbnail/20220413/04966fa44899b.png"
    },
    deletedAt:{
        type:Date,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    collection: "deletedUsers",
    timestamps: true,
});

module.exports = DeletedUserSchema;