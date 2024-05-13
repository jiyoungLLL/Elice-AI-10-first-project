const {model}= require("mongoose")
const projectSchema=require("../schemas/project-schema")

const ProjectModel = model("Project", projectSchema);

module.exports =  ProjectModel;