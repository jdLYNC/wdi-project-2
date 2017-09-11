const router = require('express').Router();

const rockets = require('../controllers/rockets');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('home'));

router.route('/rockets')
  .get(rockets.index)
  .post(secureRoute, rockets.create);

router.route('/rockets/new')
  .get(secureRoute, rockets.new);

router.route('/rockets/:id')
  .get(rockets.show)
  .put(secureRoute, rockets.update)
  .delete(secureRoute, rockets.delete);

router.route('/rockets/:id/edit')
  .get(secureRoute, rockets.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);

module.exports = router;
