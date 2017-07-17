document.addEventListener( 'DOMContentLoaded', function() {
  var input2 = document.getElementById( '0-0player2' ),
    input = document.getElementById( '0-0player1' ),
    result,
    event = new MouseEvent( 'click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
  
  // negative condition
  //input2.dispatchEvent( event );
  input.dispatchEvent( event );

  result = ( moveStorage[ 0 ] === 'x' );
  console.log( 'Should accept a valid click', result );
});

