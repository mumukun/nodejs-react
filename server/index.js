const express    = require('express');
const mongoose   = require('mongoose');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const bluebird   = require('bluebird');

const config = require('./config');
const routes = require('./routes');

const app  = express();

mongoose.Promise = bluebird;
mongoose.connect(config.mongo.url);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', routes);

/**
 * 增加mongodb 连接提示
 */
const db = mongoose.connection;

db.once('open' ,() => {
  console.log('连接数据库成功')
})
db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('close', function() {
  console.log('数据库断开，重新连接数据库');
  mongoose.connect(config.mongo.url, {server:{auto_reconnect:true}});
})


app.listen(config.server.port, () => {
  console.log(`见证奇迹的时刻Magic happens on port ${config.server.port}`);
});

module.exports = app;
