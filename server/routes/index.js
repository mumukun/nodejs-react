'use strict'
const Router = require('express').Router
const router = new Router()

// import admin from './admin'
const admin = require('./admin')

router.route('/').get((req, res) => {
  res.json({message: 'Welcome to life-record API!'})
})

router.use('/api/admin', admin)

module.exports = router
