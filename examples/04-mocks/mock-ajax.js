function makeMockAjax( $ ) {
  return {
    getPlayerInfo( resolve, reject ) {
      let url = '/players';
      return this.doXHR( url, resolve, reject );
    },
    getPlayerRecord( playerNumber, resolve, reject ) {
      // faking a RESTful API on the backend
      // only playerNumber 1 is valid
      let url = '/player/' + playerNumber + '/record';
      return this.doXHR( url, resolve, reject );
    },
    getPlayersHighscore( resolve, reject ) {
      let url = '/players/highscorer';
      return this.doXHR( url, resolve, reject );
    },
    doXHR( url, resolve, reject, method ) {
      url = 'http://localhost:8000' + url; 
      method = method || 'GET';

      return new Promise(( resolve, reject )=>{
        $.ajax( url, {
          method: method || 'GET',
        })
          .done( resolve )
          .fail( reject );
      });
    }
  }
};
