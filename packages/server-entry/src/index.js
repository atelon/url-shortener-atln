const path = require('path');
// The express server
const express = require('express');
// Morgan is a logger for requests.
const morgan = require('morgan');
// Helmet helps you secure your Express apps by setting various HTTP headers
const helmet = require("helmet");
// Yup is a JavaScript schema builder for value parsing and validation
const yup = require('yup');
// Monk provides simple yet substantial usability improvements for MongoDB usage
const monk = require('monk');
// Nano ID is a tiny, secure, URL-friendly, unique string ID generator
const { nanoid } = require('nanoid');

// Configs

// Note: if code grows - refactor with yaml config and some DI.
// Load configs
require('dotenv').config();

// Mode
const mode = process.env.NODE_ENV || 'development';

// Db config
const db = monk(process.env.MONGODB_URI);

// Server config
const port = process.env.SERVER_PORT || 1337;

// Getting DB
// I am lacking actual knowlege to cereate worthy mongodb.
const urls = db.get('urls');
urls.createIndex({ nanoid: 1 }, { unique: true });
// Need to provision behind the scenes
const users = db.get('users');

// Express
const app = express();
// https://expressjs.com/en/guide/behind-proxies.html
app.enable('trust proxy');

// Middlewares
app.use(helmet());
app.use(morgan('common'));
// I use express.json() to recognize the incoming Request Object as a JSON Object
app.use(express.json());
// Static files
app.use(express.static('./public'));

/*
 Work in progress....
*/

// Not rdy
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

// Not found required path
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

app.use((error, req, res, next) => {
  switch(error.status){
	400: 
	  res.status(400).sendFile(path.join(__dirname, 'public/400.html'));
	  break;
	401: 
	  res.status(401).sendFile(path.join(__dirname, 'public/401.html'));
	  break;
	402: 
	  res.status(402).sendFile(path.join(__dirname, 'public/402.html'));
	  break;
	403: 
	  res.status(403).sendFile(path.join(__dirname, 'public/403.html'));
	  break;
	500: 
	  res.status(500).sendFile(path.join(__dirname, 'public/500.html'));
	  break;
	502: 
	  res.status(502).sendFile(path.join(__dirname, 'public/502.html'));
	  break;
	503: 
	  res.status(503).sendFile(path.join(__dirname, 'public/503.html'));
	  break;
	504: 
	  res.status(504).sendFile(path.join(__dirname, 'public/504.html'));
	  break;
	505: 
	  res.status(505).sendFile(path.join(__dirname, 'public/505.html'));
	  break;
	default:
	  res.status(500).sendFile(path.join(__dirname, 'public/500.html'));
	  break;
  }
});

// Starting server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});