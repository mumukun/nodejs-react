const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bluebird = require('bluebird')

const config = require('./config')
// const routes = require('./routes');
// const routes = require('./routes');
import router from './routes/index.js'

const app = express()

mongoose.Promise = bluebird
mongoose.connect(config.mongo.url)

app.use(helmet())
//配置解析普通表单post请求体
// express  bodyParser 默认限制json为1m 上传图片会导致http413 现在更改为50m
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(morgan('tiny'))
//加载路由系统
// app.use('/', routes);
app.use('/', router)
/**
 * 增加mongodb 连接提示
 */
const db = mongoose.connection

db.once('open', () => {
  console.log('连接数据库成功')
})
db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error)
  mongoose.disconnect()
})

db.on('close', function() {
  console.log('数据库断开，重新连接数据库')
  mongoose.connect(config.mongo.url, {server: {auto_reconnect: true}})
})

app.listen(config.server.port, () => {
  console.log(`见证奇迹的时刻 - Magic happens on port ${config.server.port}`)
})

module.exports = app
