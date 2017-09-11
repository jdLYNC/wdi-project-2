const User = require('../models/user');

function userAuth(req, res, next) {
  if (!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .populate('rockets cards')
    .then(user => {
      if(!user) {
        return req.session.regenerate(() => {
          req.flash('danger', 'Your session has expired. Please log in again.');
          res.redirect('/login');
        });
      }

      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      req.currentUser = user;

      next();
    });
}

module.exports = userAuth;
