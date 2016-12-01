const assert = require('assert');
var webdriver = require('selenium-webdriver');

describe('chat messages', function(){
  it('message input should show a live character count', function() {
    browser.url('/');
    // var messageInput = browser.element('#message-input');
    // messageInput.setValue('test');
    // var characterCount = browser.getText('#character-count');
    // assert.equal(characterCount, '4');
  });
});
