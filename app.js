// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, 'file.zip');
  },
});

const upload = multer({ storage });

// ==================== INTERNAL IMPORTS ==================== //

const loginProvider = require('./providers/login-provider');

// ==================== GLOBAL VARIABLES ==================== //

const app = express();
let blogPost;

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
app.use('/views', express.static(path.join(__dirname, 'views')));


// ==================== FUNCTIONS ==================== //

// returns the full path of the passed view
const getViewPath = view => path.join(__dirname, `views/${view}/${view}.html`);

// ==================== ROUTES ==================== //

app.use('/login', loginProvider);

app.get('/get_post', (req, res) => {
  res.send(JSON.stringify(blogPost));
});

app.post('/create_post', (req, res) => {
  blogPost = req.body;
  res.send('ok');
});


// ==================== RENDER VIEWS ==================== //

app.get('/login', (req, res) => {
  res.sendFile(getViewPath('login'));
});

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/admin', (req, res) => {
  // check if user is logged
  bcrypt.compare('mySecretToken', req.cookies.sessionToken, (error, result) => {
    if (!result) {
      res.redirect('/login');
      return;
    }
    res.sendFile(getViewPath('admin'));
  });
});

// ==================== START SERVER ==================== //

app.listen(process.env.PORT || 3000, () => {
  console.log('READY');
});

// ====================================================== //
