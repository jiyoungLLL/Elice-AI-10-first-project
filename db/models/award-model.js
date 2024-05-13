const { model }  = require("mongoose");

const awardSchema = require("../schemas/award-schema");

const AwardModel = model("Award", awardSchema);

module.exports = AwardModel;