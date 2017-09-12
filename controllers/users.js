const User = require('../models/user');
const Message = require('../models/message');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('rockets cards')
    .exec()
    .then(user => {
      Message
        .find()
        .populate('to from')
        .exec()
        .then(usrMessages => {
          User
            .find()
            .exec()
            .then(users => res.render('users/show', { user, usrMessages, users }));
        });
    })
    .catch(err => res.render('error', { err }));
}

module.exports = {
  show: usersShow
};
