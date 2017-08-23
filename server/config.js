const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8089
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/life-record'
  }
};

module.exports = config;
