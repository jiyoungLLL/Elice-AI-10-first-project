const {model}= require("mongoose")
const certificateSchema=require("../schemas/certificate-schema")

const CertificateModel = model("Certificate", certificateSchema);

module.exports =  CertificateModel;