const path = require('path');
const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();


router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args));

router.route('/upload-pic')
  .post((...args) => controller.uploadPic(...args));

// router.post('/upload-pic', function (req, res, next) {
//   console.log('req====', req)
//   // console.log('req.files====', req.files)
//
//   // console.log('req', req)
//   res.end(JSON.stringify({status: '100', msg: '上传成功', imageUrl: 'asdas'}));
// })

// router.route('/:id')
//   .put((...args) => controller.update(...args))
//   .get((...args) => controller.findById(...args))
//   .delete((...args) => controller.remove(...args));

module.exports = router;
