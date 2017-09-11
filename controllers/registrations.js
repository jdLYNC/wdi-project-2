const User = require('../models/user');

function usersNew(req, res) {
  res.render('registrations/new');
}

function usersCreate(req, res) {
  User
    .create(req.body)
    .then(user => {
      req.flash('info', `Thanks for registering, ${user.username}! Please login.`);
      res.redirect('/login');
    })
    .catch(err => res.render('error', { err }));
}

module.exports = {
  new: usersNew,
  create: usersCreate
};
