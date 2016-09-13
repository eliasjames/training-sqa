describe( 'efsm', function()  {
  var elevatorFactory = require( '../src/elevatorFSM.js' );
  var efsm;

  beforeEach( function() {
    efsm = elevatorFactory();
  });
  afterEach( function() {
    efsm = {}; 
  });

  it( 'should start out waiting', function()  {
    expect( efsm.current ).toEqual( 'waiting' );
  });

});
