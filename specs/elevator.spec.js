'use strict';

describe( 'elv', function() {
  var elevatorFactory = require( '../src/elevator.js' );
  var elv;

  beforeEach( function() {
    elv = elevatorFactory();
  });
  afterEach( function() {
    elv = {}; 
  });

  it( 'should respond to a hail by direction', function() {
    var messageStream;
    messageStream = elv.hailUp();
    while ( !messageStream ) {
      // wait
    }
    // value comes from ../src/config.js
    expect( messageStream[1].message ).toEqual ( 'Elevator called.' );
  });
});
