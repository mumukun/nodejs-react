var express = require('express');
const Controller = require('../../lib/controller');
const pictureFacade = require('./facade');
const url = require("url");
const qiniu = require("qiniu");
const fs = require("fs");
const qiniuConfig = require('../../config/qiniu')
const path = require('path');


//qiniu's config : Access Key and Secret Key
//-------
const accessKey = qiniuConfig.ACCESS_KEY
const secretKey = qiniuConfig.SECRET_KEY
const bucket = 'picture';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket,
}
const putPolicy = new qiniu.rs.PutPolicy(options);

const uploadToken = putPolicy.uploadToken(mac);
const config = new qiniu.conf.Config();
const localFile = "/Users/jemy/Documents/qiniu.mp4";
//config.zone = qiniu.zone.Zone_z0;
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();


//
// your own qiniu bucket . for example, mine is picture .

class PictureController extends Controller {
  uploadPic(req, res, next) {


    //  Image data flow
    var imgData = req.body.data_uri;
    // // 构建本地临时图片名
    var fileName = Date.now() + '.png';
    // // 构建本地图片临时路径
    var filePath = 'temp.png'
    // //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");

    fs.writeFile(filePath, base64Data, 'base64', function (err) {
      if (err) {
        res.end(JSON.stringify({status: '102', msg: '文件写入失败'}));
      } else {
        //file
        formUploader.putFile(uploadToken, fileName, filePath, putExtra, function (respErr,
                                                                                  respBody, respInfo) {
          if (respErr) {
            throw respErr;
          }

          if (respInfo.statusCode == 200) {
            console.log(respBody);

            var imageSrc = 'http://ovc7j3cn8.bkt.clouddn.com/' + respBody.key;
            console.log('iamgeSrc===', imageSrc)
            res.end(JSON.stringify({status: '100', msg: '上传成功', imageUrl: imageSrc}));

          } else {
            res.end(JSON.stringify({status: '101', msg: '上传失败', error: respInfo}));
            console.log(respInfo.statusCode);
            console.log(respBody);
          }
        });

      }
    });

  }
}

module.exports = new PictureController(pictureFacade);
