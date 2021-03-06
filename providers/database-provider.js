const mongoose = require('mongoose');
// connect to database runing at the specified port
mongoose.connect(
  'mongodb://localhost:27017/vittra',
  { useNewUrlParser: true }
);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
