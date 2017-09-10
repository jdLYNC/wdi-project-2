const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.render('sessions/new', { message: 'Unrecognised credentials' });
      }
      res.redirect('/');
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
