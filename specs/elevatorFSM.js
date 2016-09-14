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
    efsm.call();
    expect( efsm.current ).not.toEqual( 'waiting' );
  });

  it( 'should move in a direction', function()  {
    efsm.call( 4 );
    expect( efsm.currentDirection ).toEqual( 'up' );
  });

  it( 'should move in another direction', function()  {
    efsm = elevatorFactory( 4 );
    efsm.call( 3 );
    expect( efsm.currentDirection ).toEqual( 'down' );
  });

  it( 'should update floor number', function()  {
    expect( efsm.currentFloor ).toBe( 0 );
    efsm.call( 3 );
    expect( efsm.currentFloor ).toBe( 3 );
  });
});
