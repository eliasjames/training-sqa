(function () {
  'use strict';

  module.exports = function () {
    var test = 'world';
    var testFunc = function () {
      return 'hello ' + test;
    };
    return testFunc;
  };
})();
