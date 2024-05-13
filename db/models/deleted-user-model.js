const { model } = require('mongoose');
const DeletedUserSchema = require('../schemas/deleted-user-schema');

const DeletedUserModel = model('DeletedUser', DeletedUserSchema);

module.exports = DeletedUserModel;