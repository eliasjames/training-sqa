describe('elevatorFSM', function () {
  var elevatorFactory = require('../src/elevatorFSM.js');
  var elevatorFSM = elevatorFactory();

  it('should start out waiting', function () {
    var testString = elevatorFSM.getMachineState();

    expect(testString).toEqual('WAITING');
  });
});
