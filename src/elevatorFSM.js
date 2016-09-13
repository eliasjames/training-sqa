module.exports = function () {
  var StateMachine = require('javascript-state-machine');
  var elevatorFSM = StateMachine.create({
    initial: 'waiting'
  });

  return elevatorFSM;
};
