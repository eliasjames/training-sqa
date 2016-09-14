module.exports = function () {
  var StateMachine = require('javascript-state-machine');
  var elevatorFSM = StateMachine.create({
    initial: 'waiting',
    events: [
      { name: 'move', from: 'waiting', to: 'moving' }
    ],
    callbacks: {
      onbeforeevent: function( e, from, to ) {
        console.log( e, from, to );
      }
    }
  });

  return elevatorFSM;
};
