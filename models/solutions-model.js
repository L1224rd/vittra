const mongoose = require('mongoose');

const { Schema } = mongoose;

const Card = new Schema({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  link: { type: String, default: '' },
  class: {
    img: { type: String, default: '' },
    size: { type: String, default: '' }
  }
});

const Solutions = mongoose.model(
  'Solutions',
  new Schema({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    cards: [Card],
    callToAction: {
      title: {
        before: { type: String, default: '' },
        after: { type: String, default: '' }
      },
      class: { type: String, default: '' },
      button: {
        text: { type: String, default: '' },
        link: { type: String, default: '' }
      }
    }
  })
);  

module.exports = Solutions;
