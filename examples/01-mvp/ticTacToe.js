module.exports = 
function() {
  var returnObject = {
    currentPlayer: undefined,
    movePromptObj: {
      'playerone': 'Player one, row and column',
      'playertwo': 'Player two, row and column',
      'winone': 'Player one wins',
      'wintwo': 'Player two wins',
      'badinput': 'Bad input, try again'
    },
    moveStorage: [],

    acceptInput: function( moveCoords ) {
      // basic input check
      if ( !moveCoords || moveCoords.length != 3 || typeof this.convertCoordsToArray( moveCoords ) !== 'number' ) {
        throw this.movePromptObj[ 'badinput' ];  
      }
      this.gameCycle( this.convertCoordsToArray( moveCoords ));
    },
    announceWin: function() {
      var winMessage = this.movePromptObj[ 'win' + this.getCurrentPlayer().name ];
      if ( this.promptMode ) {
        alert( winMessage );
      }
      return winMessage;
    },
    checkWin: function() {
      var winConditions = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ]
      ], 
        win = false,
        result;

      for (var i=0; i < winConditions.length; i++ ) {
        result = '';
        var that = this;
        winConditions[ i ].forEach( function( eachIndex ) {
          result += that.moveStorage[ eachIndex ];
          if ( result === 'xxx' || result === 'ooo' ) {
            win = true;
            // stop looping
            ( win ) ? i = winConditions.length : undefined; 
          }
        });
      }
      return win;
    },
    changePlayer: function() {
      this.getOrChangePlayer( true );
    },
    convertCoordsToArray: function( moveCoords ) {
      var splitCoords = moveCoords.split( '' );
      return parseInt( splitCoords[0] ) * 3 + parseInt ( splitCoords[2] );
    },
    getOrChangePlayer: function( change ) {
      if ( this.currentPlayer === undefined ) { 
        this.currentPlayer = true;
      }
      if ( change ) {
        this.currentPlayer = !this.currentPlayer;
      }
      return this.currentPlayer;
    },
    getCurrentPlayer: function() {
      return ( this.getOrChangePlayer( false )) ? 
        { 
          'letter': 'x', 
          'name'  : 'one',
        } : { 
          'letter': 'o',
          'name'  : 'two'
        };
    },
    promptInput: function( promptMessageKey ) {
      var player = this.getCurrentPlayer();
      var specificPrompt = this.promptMessageKey + player.name;
      var result = window.prompt( movePromptObj[ specificPrompt ], '0x0');
      acceptInput( result );
    },
    storeInput: function( moveCoord ) {
      var player = this.getCurrentPlayer();
      this.moveStorage[ moveCoord ] = player.letter;
    },
    gameCycle: function( moveCoord ) {
      this.storeInput( moveCoord );

      if ( !this.checkWin() ) {
        this.changePlayer( true );
        if ( this.promptMode ) {
          this.promptInput( 'player' );
        }
        return;
      }
      announceWin( this.movePromptObj[ 'win' + this.getCurrentPlayer().name ] );
    }
  };
  return returnObject;
};
