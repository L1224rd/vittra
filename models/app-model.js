const mongoose = require('mongoose');

const { Schema } = mongoose;

const Item = new Schema({
  label: { type: String, default: '' },
  link: { type: String, default: '' }
});

const App = mongoose.model(
  'App',
  new Schema({
    info: {
      phone: { type: String, default: '' },
      address: {
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        complement: { type: String, default: '' },
        lat: { type: Number, default: '' },
        long: { type: Number, default: '' },
        mapUrl: { type: String, default: '' }
      },
      facebook_link: { type: String, default: '' },
      instagram_link: { type: String, default: '' },
      linkedin_link: { type: String, default: '' },
      email: { type: String, default: '' }
    },
    items: [Item]
  })
);

module.exports = App;
