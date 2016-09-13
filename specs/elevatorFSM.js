describe( 'elevatorFSM', function()  {
  var elevatorFactory = require( '../src/elevatorFSM.js' );
  var elevatorFSM = elevatorFactory(1);

  it( 'should start out waiting', function()  {
    var testString = elevatorFSM.getMachineState();

    expect( testString ).toEqual( 'WAITING' );
  });

  it( 'should transition to another state', function()  {
    elevatorFSM.move(); 
    var testString = elevatorFSM.getMachineState();

    expect( testString ).toEqual( 'MOVE_ONE_FLOOR' );
  });

  it('should return the initial floor number', function()  {
    var floorNumber = elevatorFSM.getFloorNumber();
    console.log( floorNumber );
    // depends on the config value on line 3
    expect( floorNumber ).toEqual(1);
  });
});
