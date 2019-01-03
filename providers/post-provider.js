// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// ==================== INTERNAL IMPORTS ==================== //

require('./database-provider');
const Post = require('../models/post-model');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== ROUTES ==================== //

app.get('/', (req, res) => {
  if (req.params.id) {
    Post.findById(req.params.id, (err, data) => {
      res.send(data);
    });
    return;
  }
  Post.find({}, (err, data) => {
    res.send(data);
  });
});

app.post('/create', (req, res) => {
  Post.create(req.body, (err) => {
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
