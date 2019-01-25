const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardAtuacao = new Schema({
  title: { type: String, default: 'Not defined' },
  text: { type: String, default: 'Not defined' },
  image: { type: String, default: 'Not defined' },
  link: { type: String, default: 'Not defined' }
});

const CardPartners = new Schema({
  image: { type: String, default: 'Not defined' },
  link: { type: String, default: 'Not defined' }
});

const Cardtestimonials = new Schema({
  text: { type: String, default: 'Not defined' },
  author: { type: String, default: 'Not defined' },
  business: { type: String, default: 'Not defined' }
});

const Home = mongoose.model(
  'Home',
  new Schema({
    banner: {
      title: { type: String, default: 'Not defined' },
      description: { type: String, default: 'Not defined' }
    },
    atuacao: {
      title: { type: String, default: 'Not defined' },
      description: { type: String, default: 'Not defined' },
      cards: [CardAtuacao]
    },
    call_to_action: {
      title: { type: String, default: 'Not defined' },
      button: {
        text: { type: String, default: 'Not defined' },
        link: { type: String, default: 'Not defined' }
      }
    },
    partners: [CardPartners],
    testimonials: [Cardtestimonials]
  })
);

module.exports = Home;
