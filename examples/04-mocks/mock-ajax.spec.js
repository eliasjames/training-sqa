describe( 'ajax', function() {

  var localMock;

  beforeEach(function() {
    jasmine.Ajax.install();
    localMock = makeMockAjax( jQuery );
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
    localMock = undefined;
  });

  it( 'should not make a real ajax call', function() {
    expect( 1 ).toEqual( 1 );
    localMock.getPlayerInfo();
    request = jasmine.Ajax.requests.mostRecent();
    console.log( 'blerg', request );
    request.respondWith({ "dummy": "data" });
    expect(request.url).toBe('http://localhost:8000/players');
  });
});
