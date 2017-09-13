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

  const page = {
    isHomepage: true,
    isRocketNew: true
  };

  res.render('home', page);
}

function rocketsCreate(req, res) {
  Rocket
    .create(req.body)
    .then(() => res.redirect('/rockets'))
    .catch(err => res.render('error', { err }));
}

function rocketsEdit(req, res) {
  Rocket
    .findById(req.params.id)
    .exec()
    .then(rocket => res.render('rockets/edit', { rocket }))
    .catch(err => res.render('error', { err }));
}

function rocketsUpdate(req, res) {
  Rocket
    .findById(req.params.id)
    .exec()
    .then(console.log(req.body))
    .then(rocket => {
      rocket = Object.assign(rocket, req.body);
      return rocket.save();
    })
    .then(rocket => res.redirect(`/rockets/${rocket.id}`))
    .catch(err => res.render('error', { err }));
}

function rocketsDelete(req, res) {
  Rocket
    .findById(req.params.id)
    .exec()
    .then(rocket => rocket.remove())
    .then(() => res.redirect('/rockets'))
    .catch(err => res.render('error', { err }));
}

function rocketsFavorite(req, res) {
  if (!req.currentUser.cards.find(rocket => rocket.id === req.params.id)) {
    console.log('Pushing rocket to cards');
    req.currentUser.cards.push(req.params.id);
  } else {
    console.log('Removing rocket from cards');
    req.currentUser.cards = req.currentUser.cards.filter(rocket => rocket.id !== req.params.id);
  }
  req.currentUser.save()
    .then(() => res.redirect('back'));
}

module.exports = {
  index: rocketsIndex,
  show: rocketsShow,
  new: rocketsNew,
  create: rocketsCreate,
  edit: rocketsEdit,
  update: rocketsUpdate,
  delete: rocketsDelete,
  favorite: rocketsFavorite
};
