const mongoose = require('mongoose');

const { Schema } = mongoose; // Standard interface used by mongoose to define models

const User = mongoose.model(
  'User',
  new Schema({
    username: { type: String, default: 'Not defined' },
    email: { type: String, default: 'Not defined' },
    password: { type: String, default: 'Not defined' },
  }),
);

module.exports = User;
