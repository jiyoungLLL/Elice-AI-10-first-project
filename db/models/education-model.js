const {model}= require("mongoose")
const educationSchema=require("../schemas/education-schema")

const EducationModel = model("Education", educationSchema);

module.exports =  EducationModel;