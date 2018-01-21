const Router = require('express').Router
const router = new Router()

const picture = require('./model/picture/router')

router.route('/').get((req, res) => {
  res.json({message: 'Welcome to life-record API!'})
})

router.use('/api/picture', picture)

module.exports = router
