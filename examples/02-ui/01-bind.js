document.addEventListener( 'DOMContentLoaded', function() {
  var inputs = document.getElementsByTagName( 'input' );
  for ( var i=0; i < inputs.length; i++ ) {
    inputs[ i ].addEventListener( 'click', function( e ) {
      var clickTarget = e.target;
      var loop = true;

      acceptInput( clickTarget.name );
    });
  }
});
