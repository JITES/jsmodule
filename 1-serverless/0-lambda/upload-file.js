import { config, S3 } from 'aws-sdk';
import { basename } from 'path';
import { createReadStream } from 'fs';

config.update({region: 'REGION'});

var s3 = new S3({apiVersion: '2006-03-01'});

var uploadParams = {Bucket: process.argv[2], Key: '', Body: ''};
var file = process.argv[3];

var fileStream = createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
uploadParams.Key = basename(file);

s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});
