const User = require('../models/user');

function usersNew(req, res) {
  const page = {
    isHomepage: true,
    isRegistration: true
  };

  res.render('home', page);
}

function usersCreate(req, res) {

  const page = {
    isHomepage: true
  };

  User
    .create(req.body)
    .then(user => {
      req.flash('info', `Thanks for registering, ${user.username}! Please login.`);
      res.render('home', page);
    })
    .catch(err => res.render('error', { err }));
}

module.exports = {
  new: usersNew,
  create: usersCreate
};
