const Rocket = require('../models/rocket');

function rocketsIndex(req, res) {
  Rocket
    .find()
    .exec()
    .then(rockets => res.render('rockets/', { rockets }))
    .catch(err => res.render('error', { err }));
}

function rocketsShow(req, res) {
  Rocket
    .findById(req.params.id)
    .exec()
    .then(rocket => res.render('rockets/show', { rocket }))
    .catch(err => res.render('error', { err }));
}

function rocketsNew(req, res) {
  res.render('rockets/new');
}

function rocketsCreate(req, res) {
  Rocket
    .create(req.body)
    .then(() => res.redirect('/rockets'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: rocketsIndex,
  show: rocketsShow,
  new: rocketsNew,
  create: rocketsCreate
};
