describe('elevatorFSM', function () {
  var elevatorFactory = require('../src/elevatorFSM.js');
  var elevatorFSM = elevatorFactory();

  it('should start out waiting', function () {
    var testString = elevatorFSM.getMachineState();

    expect(testString).toEqual('WAITING');
  });

  it('should transition to another state', function () {
    elevatorFSM.move(); 
    var testString = elevatorFSM.getMachineState();

    expect(testString).toEqual('MOVE_ONE_FLOOR');
  });
});
