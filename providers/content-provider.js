// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');

// ==================== INTERNAL IMPORTS ==================== //

require('./database-provider');
const Home = require('../models/home-model');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== ROUTES ==================== //

app.get('/home', (req, res) => {
  Home.findOne({}, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

app.post('/home', (req, res) => {
  Home.findOneAndUpdate({}, req.body, (err) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send('ok');
  });
});

// ==================== FUNCTIONS ==================== //

// ================================================ //

module.exports = app;
