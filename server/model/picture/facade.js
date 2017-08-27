const Facade = require('../../lib/facade');
const petSchema = require('./schema');

class PictureFacade extends Facade {}

module.exports = new PictureFacade(petSchema);
