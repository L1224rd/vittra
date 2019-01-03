// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// ==================== INTERNAL IMPORTS ==================== //

require('./database-provider');
const User = require('../models/user-model');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== ROUTES ==================== //

app.post('/', (req, res) => {
  User.find({ username: req.body.username }, (err, user) => {
    if (!user.length) {
      res.send({
        status: 'error',
        msg: 'user-not-found',
      });
      return;
    }
    bcrypt.compare(req.body.password, user[0].password, (error, result) => {
      if (error) {
        res.send({
          status: 'error',
          msg: 'intern-error',
        });
        return;
      }

      if (!result) {
        res.send({
          status: 'error',
          msg: 'wrong-password',
        });
        return;
      }

      bcrypt.hash('mySecretToken', 10, (error2, hash) => {
        if (error2) {
          res.send({
            status: 'error',
            msg: 'intern-error',
          });
          return;
        }

        res.send({
          status: 'ok',
          msg: hash,
        });
      });
    });
  });
});

// ==================== FUNCTIONS ==================== //

// ================================================ //

module.exports = app;
