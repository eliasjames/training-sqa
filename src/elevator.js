'use strict';

module.exports = function () {
  var config = require('./config.js')();
  var elv = {
    hailUp: function goingUp () {
      hail( 'up' );
      return [config.ELEVATOR_CALLED];
    },
    hailDown: function goingUp () {
      hail( 'down' );
      return [config.ELEVATOR_CALLED];
    },
    acceptPassengers: function acceptPassengers( passengerCount ) {
      if ( passengerCount ) {
        return passengerCount;
      }
      return 0;
    }
  };
  function hail( direction ) {
    // no-op
  }
  return elv;
};
