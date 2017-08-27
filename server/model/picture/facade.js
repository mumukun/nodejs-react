const Facade = require('../../lib/facade');
const pictureSchema = require('./schema');

class PictureFacade extends Facade {}

module.exports = new PictureFacade(pictureSchema);
