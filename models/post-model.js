const mongoose = require('mongoose');

const { Schema } = mongoose; // Standard interface used by mongoose to define models

const Post = mongoose.model(
  'Post',
  new Schema({
    data: { type: String, default: 'Not defined' },
    creationTime: { type: Number, default: 0 },
  }),
);

module.exports = Post;
