const assert = require('assert');
const webdriverio = require('webdriverio');
const app = require('../../server');

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const client = webdriverio.remote(options);

let server;
const port = process.env.PORT || 3000;


describe('home', () => {
  before((done) => {
    server = app.listen(port, (err) => {
      if (err) { return done(err); }
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  it('should have the title stored in app.locals.title', (done) => {
    client
      .init()
      .url(`http://localhost:${port}/`)
      .getTitle().then((title) => {
          assert.equal(title, app.locals.title);
          done();
      });
      done();
  });
});

describe('input field', () => {
  before((done) => {
    server = app.listen(port, (err) => {
      if (err) { return done(err); }
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  it('should allow user to input value', () => {
    let input = 'http://google.com';
    client
      .init()
      .url(`http://localhost:${port}/`)
      .element('.url-input')
      .setValue(input)
      .click('.url-submit').then((input) => {
        assert.equal('.url-card', input);
      });
  });
});
