describe('hello-world', function () {
  it('should return a string', function () {
    var helloWorldFactory = require('../src/hello-world.js');
    var helloWorldInstance = helloWorldFactory();
    var testString = helloWorldInstance();

    expect(testString).toEqual('hello world');
  });
});
