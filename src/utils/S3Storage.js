const S3 = require('aws-sdk/clients/s3')
const aws = require("aws-sdk");
require('dotenv').config()
const fs = require('fs')

const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const spacesEndpoint = process.env.AWS_ENDPOINT
const region = process.env.AWS_REGION

const spacesEndpoint2 = new aws.Endpoint(spacesEndpoint );

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
    endpoint: spacesEndpoint2
})
// uploads a file to s3
function uploadFile(file) {
    console.log("file",file)
    const fileStream = fs.createReadStream(file.path)
    
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename,
      ContentDisposition:"inline",
      ContentType: file.mimetype
    }
    
    return s3.upload(uploadParams).promise()
  }
  exports.uploadFile = uploadFile

