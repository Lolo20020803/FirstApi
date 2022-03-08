const mongoose = require('mongoose');
const { randomByte, pbkdf2Sync } = require('crypto');

const { Schema } = mongoose;

// Creation of mongoose schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
  },
  surname: {
    type: String,
    required: [true, 'Surname required'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email required'],
  },
  password: {
    type: String,
    unique: true,
    required: [true, 'Password is required'],
  },
  saltPass: {
    type: String,
  },
});

function hashPasword(next) {
  const user = this;

  user.saltPass = randomByte(16).toString('hex');

  if (user.isModified('password')) {
    user.password = pbkdf2Sync(user.password, user.saltPass, 100000, 64, 'sha512');
  }
  return next();
}
function comparePass(pass) {
  const user = this;
  return user.password === pbkdf2Sync(pass, user.saltPass, 100000, 64, 'sha512');
}

userSchema.pre('save', hashPasword);
userSchema.methods.comparePass = comparePass;

module.exports = mongoose.model('User', userSchema);
