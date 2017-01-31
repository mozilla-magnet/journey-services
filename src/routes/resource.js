const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const createRouteHandler = require('../express/promisehandler');
const HttpError = require('../express/httperror');
const path = require('path');
const journeyData = require('../api');

const DEFAULT_API_LIMIT = 100;
const DEFAULT_SEARCH_RADIUS = 100;

router.use(bodyParser.json());

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
// ?sortby=<(latest|popular)>
router.get('/story', createRouteHandler((req, res) => {

  let limit = Number(req.query.limit) || DEFAULT_API_LIMIT;

  if (req.query.location) {
    const [ latitude, longitude ] = req.query.location.split(',').map(Number);
    const currentLocation = { latitude, longitude };
    const radius = Number(req.query.radius) || DEFAULT_SEARCH_RADIUS;

    return journeyData.getClosestStories({ currentLocation, radius, limit })
      .then((stories) => {
        res.json(stories);
      });
  }

  return journeyData
    .getNewestStories()
    .then((stories) => {
      res.json(stories);
    });
}));

router.get('/story/:id', createRouteHandler((req, res) => {
  return journeyData
    .getStory({ id: Number(req.params.id) })
    .then((story) => {
      res.json(story);
    });
}));

router.post('/eventsink', createRouteHandler((req, res) => {
  const requestBody = req.body;

  if (!Array.isArray(requestBody)) {
    throw new HttpError(400, 'Event sink only accepts a JSON array');
  }

  // TODO: Rate limit size of request body (to avoid tieing up the server
  // instance, we should queue these for async processing.
  return journeyData.logEvents(requestBody)
    .then(() => {
      res.end();
    });
}));

module.exports = router;
