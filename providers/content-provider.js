// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');

// ==================== INTERNAL IMPORTS ==================== //

require('./database-provider');

const GlobalContent = {};
GlobalContent.home = require('../models/home-model');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== ROUTES ==================== //

app.get('/:session', (req, res) => {
  GlobalContent[req.params.session].findOne({}, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

app.post('/:session', (req, res) => {
  GlobalContent[req.params.session].findOneAndUpdate({}, req.body, (err, doc) => {
    if (err) {
      res.send(err);
      return;
    }
    if (!doc) {
      GlobalContent[req.params.session].create(req.body, (err2) => {
        if (err2) {
          res.send(err2);
          return;
        }
        res.send('ok');
      });
    } else {
      res.send('ok');
    }
  });
});

// ==================== FUNCTIONS ==================== //

// ================================================ //

module.exports = app;
