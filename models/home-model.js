const mongoose = require('mongoose');

const { Schema } = mongoose;

const Partner = new Schema({
  imageUrl: { type: String, default: '' },
  link: { type: String, default: '' }
});

const Card = new Schema({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  link: { type: String, default: '' },
  class: { type: String, default: '' }
});

const Home = mongoose.model(
  'Home',
  new Schema({
    banner: {
      title: { type: String, default: '' },
      description: { type: String, default: '' }
    },
    solutions: {
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      cards: [Card]
    },
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
    },
    partners: [Partner],
    contact: {
      title: { type: String, default: '' },
      description: { type: String, default: '' }
    }
  })
);

module.exports = Home;
