const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pictureSchema = new Schema({
  title: {type: String},
  picurl: {type: String},
  time: {type: String},

});


module.exports = mongoose.model('Picture', pictureSchema);
