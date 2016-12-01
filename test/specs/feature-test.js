const assert = require('assert');
const webdriverio = require('webdriverio');
const app = require('../../server');

const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

let server;
const port = process.env.PORT || 3001;

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle();
    console.log(title);
  	assert.equal(title, 'Jetpack');
  });
});
