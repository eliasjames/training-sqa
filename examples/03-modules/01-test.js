document.addEventListener( 'gameStarted', function( e ) {
  var input2 = document.getElementById( e.detail.gameId + '-0-0-2' ),
    input = document.getElementById( e.detail.gameId + '-0-0-1' ),
    result,
    event = new MouseEvent( 'click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
  
  // negative condition
  //input2.dispatchEvent( event );
  input.dispatchEvent( event );
  input.addEventListener( 'getBoard', function( e ) {
    result = ( e.detail.board[ 0 ] === 'x' );
    console.log( 'Should accept a valid click', result );
  });
});

