module.exports = function () {
  var currentStatus = 'hello world';
  return {
    currentStatus: function () {
      return currentStatus;
    }
  }
};
