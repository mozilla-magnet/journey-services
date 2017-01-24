const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const createRouteHandler = require('../express/promisehandler');
const HttpError = require('../express/httperror');
const path = require('path');
const journeyData = require('../api');

router.get('/user', (req, res) => {
  throw new HttpError(501, 'Not Implemented');
});

router.post('/user', (req, res) => {
  throw new HttpError(501, 'Not Implemented');
});

router.get('/user/:id/', (req, res) => {
  throw new HttpError(501, 'Not Implemented');
});

router.get('/user/:id/story/', (req, res) => {
  throw new HttpError(501, 'Not implemented');
});

// ?location=<lat>,<long>&radius=<radius>&limit=<limit>
// ?sortby=<(latest)>
router.get('/story', (req, res) => {
  journeyData.getNewestStories()
    .then((stories) => {
      res.json(stories);
    });
});

router.get('/story/:id', (req, res) => {
  journeyData.getStory({ id: Number(req.params.id) })
    .then((story) => {
      res.json(story);
    });
});

router.post('/eventsink', (req, res) => {
  throw new HttpError(501, 'Not Implemented')
// ?location=<lat>,<long>&radius=<radius>&limit=<limit>
// ?sortby=<(latest)>

});

module.exports = router;
