describe( 'backbone', function() {

  var localBackbone;

  beforeEach(function() {
    var myModel = new OrderedModel({
      end: 20,
      start: 15
    });
    localBackbone = new OrderedView({ model: myModel });
  });

  afterEach(function() {
    localBackbone = undefined;
  });

  it( 'should honor promises', function() {
    expect( localBackbone ).not.toBeNull();
  });
});
