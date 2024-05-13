const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
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
    profilePic: {
      type: String,
      default: 'https://cdn.imweb.me/thumbnail/20220413/04966fa44899b.png',
    },
    emailResetAt: {
      type: Date,
      required: false,
      default: null,
    },
    passwordResetAt: {
      type: Date,
      required: false,
      default: null,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

module.exports = UserSchema;
