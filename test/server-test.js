const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('GET /', () => {

  beforeEach(() => {
    app.locals.urlNames = [{ id: 1, url: 'http://google.com'}];
  });

  afterEach(() => {
    app.locals.urlNames = [];
  });

  it('should return a 200 status code', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should return a set urls stored in app.locals.urlNames', (done) => {
    request(app)
      .get('/')
      .expect(200, {
        urls: app.locals.urlNames
      }, done);
  });
});
