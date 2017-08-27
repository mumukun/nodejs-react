const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const pet = require('./model/pet/router');
const picture = require('./model/picture/router');

router.route('/').get((req, res) => {
  res.json({message: 'Welcome to life-record API!'});
});

router.use('/api/user', user);
router.use('/api/pet', pet);
router.use('/api/picture', picture);

module.exports = router;
