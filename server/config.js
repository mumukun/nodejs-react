const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8089
  },
  mongo: {
    //local
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/life',
//test
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/life'
  }
}

module.exports = config
