module.exports = function ( currentFloor ) {
  var StateMachine = require('javascript-state-machine');
  var elevatorFSM = StateMachine.create({
    initial: 'waiting',
    events: [
      { name: 'call', from: ['waiting', 'moving'], to: 'moving' },
      { name: 'stop', from: 'moving', to: 'stopping' },
      { name: 'pass', from: 'moving', to: 'passing' },
      { name: 'check', from: 'passing', to: 'moving' }
    ],
    callbacks: {
      onbeforeevent: function onBeforeEvent ( e, from, to ) {
        console.log( e, from, to );
      },
      onbeforecall: function onBeforeCall ( e, from, to, floor ) {
        if ( floor > elevatorFSM.currentFloor ) {
          elevatorFSM.currentDirection = 'up';
          elevatorFSM.stopsQueue.push( floor );
        }
        if ( floor < elevatorFSM.currentFloor ) {
          elevatorFSM.currentDirection = 'down';
          elevatorFSM.stopsQueue.push( floor );
        }
      },
      onentermoving: function onEnterMoving ( e, from, to ) {
        if ( elevatorFSM.stopsQueue.length > 0 ) {
          if ( elevatorFSM.stopsQueue.indexOf( elevatorFSM.currentFloor ) > -1 ) {
            elevatorFSM.stop();
          } else {
            if ( elevatorFSM.currentDirection === 'down' ) {
              elevatorFSM.currentFloor--;
            }
            if ( elevatorFSM.currentDirection === 'up' ) {
              elevatorFSM.currentFloor++;
            }
            elevatorFSM.pass();
          }
        } else {
          throw new Error( 'entered moving without stopsQueue' );
        }
      },
      onenterpassing: function onEnterPassing ( e, from, to ) {
        elevatorFSM.check();
      }
    }
  });

  elevatorFSM.currentFloor = currentFloor || 0;
  elevatorFSM.stopsQueue = [];

  return elevatorFSM;
};
