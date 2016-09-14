module.exports = function ( currentFloor ) {
  var StateMachine = require('javascript-state-machine');
  var currentFloor = currentFloor || 0;
  var elevatorFSM = StateMachine.create({
    initial: 'waiting',
    events: [
      { name: 'move', from: ['waiting', 'moving'], to: 'moving' }
    ],
    callbacks: {
      onbeforeevent: function( e, from, to ) {
        console.log( e, from, to );
      },
      onmove: function( e, from, to, floor ) {
        if ( floor > currentFloor ) {
          elevatorFSM.currentDirection = 'up';
        }   
        if ( floor < currentFloor ) {
          elevatorFSM.currentDirection = 'down';
        }
      }
    }
  });

  return elevatorFSM;
};
