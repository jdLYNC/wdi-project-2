const router = require('express').Router();

const rockets = require('../controllers/rockets');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home'));

router.route('/rockets')
  .get(rockets.index)
  .post(rockets.create);

router.route('/rockets/new')
  .get(rockets.new);

router.route('/rockets/:id')
  .get(rockets.show)
  .put(rockets.update)
  .delete(rockets.delete);

router.route('/rockets/:id/edit')
  .get(rockets.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

module.exports = router;
