const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean },
  cards: [{ type: mongoose.Schema.ObjectId, ref: 'Rocket' }],
  messages: [{ type: mongoose.Schema.ObjectId, ref: 'Message' }]
});

userSchema
  .virtual('rockets', {
    ref: 'Rocket',
    localField: '_id',
    foreignField: 'user'
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPasswordConfirmation(next) {
  if (this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.hasFavorited = function hasFavorited(rocket) {
  if(!rocket) return false;
  return !!this.cards.find(_rocket => rocket.id === _rocket.id);
};

module.exports = mongoose.model('User', userSchema);
