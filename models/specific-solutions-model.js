const mongoose = require('mongoose');

const { Schema } = mongoose;

const Image = new Schema({
  src: { type: String, default: '' },
  caption: { type: String, default: '' }
});

const SolutionItem = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  imageArea: {
    type: { type: String, default: '' },
    images: [Image]
  },
  topics: [{
    title: { type: String, default: '' }
  }]
});

const SpecificSolutions = mongoose.model(
  'SpecificSolutions',
  new Schema({
    header: {
      title: { type: String, default: '' },
      description: { type: String, default: '' }
    },
    solutionItems: [SolutionItem]
  })
);

module.exports = SpecificSolutions;
