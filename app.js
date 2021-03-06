// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

// ==================== INTERNAL IMPORTS ==================== //

const loginProvider = require('./providers/login-provider');
const postProvider = require('./providers/post-provider');
const contentProvider = require('./providers/content-provider');
const sendEmail = require('./providers/email-provider');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// parse post requests to body
app.use(bodyParser.json({ limit: '50mb' }));
// 50mb so it accepts base64 encoded images sent via POST
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// parse cookies
app.use(cookieParser());

// serving static files
app.use('/vt-admin/views', express.static(path.join(__dirname, 'views')));
app.use('/vt-admin/static', express.static(path.join(__dirname, 'static')));

// ==================== FUNCTIONS ==================== //

// returns the full path of the passed view
const getViewPath = view => path.join(__dirname, `views/${view}/${view}.html`);

// ==================== ROUTES ==================== //

app.use('/vt-admin/login', loginProvider);
app.use('/vt-admin/posts', postProvider);
app.use('/vt-admin/content', contentProvider);
app.post('/vt-admin/contato', (req, res) => {
  sendEmail(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

// ==================== RENDER VIEWS ==================== //

app.get('/vt-admin/login', (req, res) => {
  res.sendFile(getViewPath('login'));
});

app.get('/vt-admin', (req, res) => {
  // check if user is logged
  bcrypt.compare('mySecretToken', req.cookies.sessionToken, (error, result) => {
    if (!result) {
      res.redirect('/vt-admin/login');
      return;
    }
    res.sendFile(getViewPath('admin'));
  });
});

// ==================== START SERVER ==================== //

app.listen(process.env.PORT || 3030, () => {
  console.log('READY');
});

// ====================================================== //
