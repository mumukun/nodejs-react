const path = require('path');
const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();


router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args));

router.route('/upload-pic')
  .post((...args) => controller.uploadPic(...args));



module.exports = router;
