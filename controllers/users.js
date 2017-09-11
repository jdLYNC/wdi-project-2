const User = require('../models/user');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('rockets cards')
    .exec()
    .then(user => res.render('users/show', { user }))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  show: usersShow
};
