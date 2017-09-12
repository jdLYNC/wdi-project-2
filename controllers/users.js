const User = require('../models/user');
const Message = require('../models/message');
const Promise = require('bluebird');

function usersShow(req, res) {

  const data = {
    selectedUser: req.query.userId,
    user: User.findById(req.params.id).populate('rockets cards').exec(),
    usrMessages: Message.find({
      $or: [
        { to: req.currentUser.id, from: req.query.userId },
        { from: req.currentUser.id, to: req.query.userId }
      ]
    }).populate('to from').exec(),
    users: User.find().exec()
  };

  Promise.props(data)
    .then(data => res.render('users/show', data))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  show: usersShow
};
