const request = require('supertest');
const app = require('../src');

describe('resource-endpoints', function() {

  describe('/user', function() {
    // Do nothing
    describe('GET', function() {});
    describe('POST', function() {});
  });

  describe('/user/:userId', function() {
    describe('GET', function() {});
  });

  describe('/user/:userId/story', function() {
    describe('GET', function() {});
  });
});
