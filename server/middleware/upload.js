import multer from "multer";
import multerS3 from "multer-s3";
import AWS from 'aws-sdk';
import dotenv from "dotenv";

dotenv.config();
/* FILE STORAGE */
AWS.config.update({
    accesskeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
const s3 = new AWS.S3();
const myBucket = process.env.AWS_BUCKET_NAME


var upload = multer({
  storage:multerS3({
      s3:s3,
      bucket:myBucket,
      acl:"public-read",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key : function (req, file, cb) {
          cb(null, file.originalname);
      }
  })
});
export default upload;