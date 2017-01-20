const request = require('supertest');
const app = require('../src');

describe('ops-endpoints', function() {

  describe('/__gtg', function() {
    it('should return the good to go status of the application', function() {
      return request(app)
        .get('/__gtg')
        .expect(200);
    });
  });

  describe('/__health', function() {
    it('should return a list of healthcheck responses for this service', function() {
      return request(app)
        .get('/__health')
        .expect(200);
    });
  });
});
