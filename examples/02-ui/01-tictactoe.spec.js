describe( 'tictactoe input', 
 function() {
   it( 'should error after multiple clicks', function() {
      acceptInput( '1x1' );
      expect( moveStorage[ 3 ] ).toEqual( 'x' );
   });
});

