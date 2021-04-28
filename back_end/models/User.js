const mongoose = require('mongoose');

/**
 * used mongoose in order to create a schema for the users.
 * all data is required
 * usernames and emails must be unique
 * when creating a new user, we will also store the date and time
 */

const UserSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('all_users', UserSchema);
