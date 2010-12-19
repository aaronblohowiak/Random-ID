/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/


(function(exports){
  
  var BASE64CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

  exports.uuid = function(len, radix) {
    var chars = BASE64CHARS, uuid = [], i=0;
    radix = radix || chars.length;
    len = len || 22;

    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];

    return uuid.join('');
  };

})(typeof exports === 'undefined'? this['UUID']={}: exports);;