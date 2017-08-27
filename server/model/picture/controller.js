const Controller = require('../../lib/controller');
const pictureFacade = require('./facade');

class PictureController extends Controller {}

module.exports = new PictureController(pictureFacade);
