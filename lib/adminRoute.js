function secureRoute(req, res, next) {
  if (!req.session.userId || !req.session.admin) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in with admin privileges to perform that action.');
      res.redirect('/login');
    });
  }
  next();
}

module.exports = secureRoute;
