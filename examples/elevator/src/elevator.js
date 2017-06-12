'use strict';

module.exports = function () {
  var config = require('./config.js')();
  var eventHistory = [{
    message: config.ELEVATOR_STARTED
  }];
  var elv = {
    hailUp: function goingUp () {
      hail( 'up' );
      eventHistory.push({
        message: config.ELEVATOR_CALLED
      });
      return eventHistory;
    },
    hailDown: function goingUp () {
      hail( 'down' );
      eventHistory.push({
        message: config.ELEVATOR_CALLED
      });
      return eventHistory;
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
