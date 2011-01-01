var test = {},
    newId = require("uuid").newId,
    assert = require('assert');
    
module.exports = test;

test["newId should return only 0-9a-zA-Z\-_ so we can have url-safe newIds"] = function(){
  var guid = newId(),
      validChars = guid.match(/[\da-zA-Z\-_]/g).length,
      len = guid.length;
  assert.equal(validChars, len, guid + " has "+validChars+" when it should have "+len );
};

test["newId should return 22 chars by default"] = function(){
  var guid = newId(),
      len = guid.length;
  assert.equal(len, 22, guid + " should be 22 chars long, it was "+len);
};

test["newId should respect a length param"] = function(){
  var guid = newId(10);
  assert.equal(guid.length, 10, guid + "should be 10 chars long");
};

test["newId should be respect a 'base' param"] = function(){
  var guid = newId(100, 36),
      validChars = guid.match(/[\dA-Z]/g).length,
      len = guid.length;
  
  assert.equal(validChars, len, guid + " has "+validChars+" when it should have "+len );
};

