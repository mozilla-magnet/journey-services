const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const createRouteHandler = require('../express/promisehandler');
const HttpError = require('../express/httperror');

const path = require('path');

router.get('/user', (req, res) => {
  throw new HttpError(501, "Not Implemented");
});

router.post('/user', (req, res) => {
  throw new HttpError(501, "Not Implemented");
});

router.get('/user/:userId/', (req, res) => {
  throw new HttpError(501, "Not Implemented");
});

router.get('/user/:userId/story/', (req, res) => {
  throw new HttpError(501, "Not Implemented");
});



module.exports = router;
