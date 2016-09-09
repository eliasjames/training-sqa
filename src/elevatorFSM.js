module.exports = function () {
  var Stately = require('stately.js');
  var elevatorFSM = Stately.machine({
    'WAITING'       : {
      'move'  : function () {
        return this.MOVE_ONE_FLOOR;
       }
    },
    'MOVE_ONE_FLOOR': {}
  });

  return elevatorFSM;
};
