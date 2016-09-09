module.exports = function () {
  var Stately = require('stately.js');
  var elevatorFSM = Stately.machine({
    'WAITING': {}
  });

  return {
    getCurrentStatus: function () {
      return elevatorFSM.getMachineState();
    }
  }
};
