const mongoose = require('mongoose');

const { Schema } = mongoose; // Standard interface used by mongoose to define models

const About = mongoose.model(
  'About',
  new Schema({
    title: String,
    description: String,
    know: {
      title: String,
      text: String,
      img: String,
    },
    timeline: {
      title: String,
      subtitle: String,
      processes: [{
        title: String,
        img: String,
        items: [{
          title: String,
          text: String,
        }],
      }],
    },
  }),
);

module.exports = About;
