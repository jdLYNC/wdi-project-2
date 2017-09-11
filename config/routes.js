const router = require('express').Router();

const rockets = require('../controllers/rockets');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');

router.get('/', (req, res) => res.render('home'));

router.route('/rockets')
  .get(rockets.index)
  .post(adminRoute, rockets.create);

router.route('/rockets/new')
  .get(adminRoute, rockets.new);

router.route('/rockets/:id')
  .get(rockets.show)
  .put(adminRoute, rockets.update)
  .delete(adminRoute, rockets.delete);

router.route('/rockets/:id/edit')
  .get(adminRoute, rockets.edit);

router.route('/rockets/:id/favorite')
  .post(secureRoute, rockets.favorite);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);

module.exports = router;
