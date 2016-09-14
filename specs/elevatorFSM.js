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

  it( 'should move when called', function()  {
    efsm.move();
    expect( efsm.current ).not.toEqual( 'waiting' );
  });

  it( 'should move in a direction', function()  {
    efsm.move( 4 );
    expect( efsm.currentDirection ).toEqual( 'up' );
  });

  it( 'should move in another direction', function()  {
    efsm = elevatorFactory( 4 );
    efsm.move( 3 );
    expect( efsm.currentDirection ).toEqual( 'down' );
  });
});
