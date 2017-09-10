const router = require('express').Router();

const rockets = require('../controllers/rockets');

router.get('/', (req, res) => res.render('home'));

router.route('/rockets')
  .get(rockets.index)
  .post(rockets.create);

router.route('/rockets/new')
  .get(rockets.new);

router.route('/rockets/:id')
  .get(rockets.show);

router.route('/rockets/:id/edit')
  .get(rockets.edit);

module.exports = router;
