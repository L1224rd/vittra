// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');

// ==================== INTERNAL IMPORTS ==================== //

require('./database-provider');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== FUNCTIONS ==================== //

// not a good practice, but this way we have way less code
// use to get the models dinamycly
const getSession = section => require(`../models/${section}-model`);

// ==================== ROUTES ==================== //

app.get('/:section', (req, res) => {
  getSession(req.params.section).findOne({}, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

app.post('/:section', (req, res) => {
  getSession(req.params.section).findOneAndUpdate({}, req.body, (err, doc) => {
    if (err) {
      res.send(err);
      return;
    }
    if (!doc) {
      getSession(req.params.section).create(req.body, (err2) => {
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

// ================================================ //

module.exports = app;
