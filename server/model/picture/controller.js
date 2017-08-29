var express = require('express');
const Controller = require('../../lib/controller');
const pictureFacade = require('./facade');
const url = require("url");
const qiniu = require("qiniu");
const fs = require("fs");
const qiniuConfig = require('../../config/qiniu')
const path = require('path');


//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = qiniuConfig.ACCESS_KEY
qiniu.conf.SECRET_KEY = qiniuConfig.SECRET_KEY

//要上传的空间
const bucket = 'picture';


class PictureController extends Controller {
  uploadPic(req, res, next) {

    // console.log('req.body', req.body)

    // // 图片数据流
    var imgData = req.body.data_uri;
    // // 构建本地临时图片名
    var fileName = Date.now() + '.png';
    // // 构建本地图片临时路径
    var filePath = 'temp.png'
    // //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    fs.writeFile(filePath, base64Data, 'base64', function (err) {
      console.log(err);
      if (err) {
        res.end(JSON.stringify({status: '102', msg: '文件写入失败'}));
      } else {
        console.log('bucket filename....', bucket + ":" + fileName)
        // //生成上传
        var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + fileName);
        var token = putPolicy.token();
        var extra = new qiniu.io.PutExtra();
        qiniu.io.putFile(token, fileName, filePath, extra, function (err, ret) {
          if (!err) {
            // 上传成功， 处理返回值  
            // ret.key 是图片的名字
            var imageSrc = 'http://ovc7j3cn8.bkt.clouddn.com/' + ret.key;
            console.log('iamgeSrc===', imageSrc)
            res.end(JSON.stringify({status: '100', msg: '上传成功', imageUrl: imageSrc}));
          } else {
            // 上传失败， 处理返回代码
            res.end(JSON.stringify({status: '101', msg: '上传失败', error: ret}));
          }
          // 上传之后删除本地文件
          //fs.unlinkSync(filePath);
        });
      }
    });
  }
}

module.exports = new PictureController(pictureFacade);
