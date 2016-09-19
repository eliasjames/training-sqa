'use strict';

describe( 'elv', function() {
  var elevatorFactory = require( '../src/elevator.js' );
  var config = require( '../src/config.js' );
  var elv;

  beforeEach( function() {
    elv = elevatorFactory();
  });
  afterEach( function() {
    elv = {}; 
  });

  it( 'should respond to a hail by direction', function() {
    var message;
    function callback( data ) {
      return data.message; 
    }

    message = elv.hailUp( callback );
    while ( !message ) {
      // wait
    }
    // value comes from ../src/config.js
    expect( message[0] ).toEqual ( 'Elevator called.' );
  });
});
