const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('GET /', () => {

  it('should return a 200 status code', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return no stored urls', (done) => {
    request(app)
      .get('/')
      .expect(200, {}, done)
  });
});

describe('POST /', () => {

  it('should create a new url', (done) => {
    const url = { id: '1', url: 'http://google.com', date: '2011-01-08', count: 0 }
      request(app)
        .post('/')
        .send({ url })
        .expect(201, done)
  });
});
