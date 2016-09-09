describe('elevatorFSM', function () {
  it('should start out waiting', function () {
    var elevatorFactory = require('../src/elevatorFSM.js');
    var elevatorInstance = elevatorFactory();
    var testString = elevatorInstance.currentStatus();

    expect(testString).toEqual('hello world');
  });
});
