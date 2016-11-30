const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('GET /jetpack', () => {

  it('should return a 200 status code', (done) => {
    request(app)
      .get('/jetpack')
      .expect(200, done);
  });

  it('should return stored urls', (done) => {
    request(app)

  });
});

describe('POST /jetpack', () => {
  beforeEach(() => {
  });

  it('should create a new url', (done) => {
    const url = { id: '1', url: 'http://google.com', date: '2011-01-08', count: 0 }
      request(app)
        .post('/jetpack')
        .send({ url })
        .expect(201)
        .end(() => {
          assert.deepEqual()
        })
  })
})
