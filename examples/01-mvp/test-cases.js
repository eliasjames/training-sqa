module.exports = 
function TestCases( TicTacToe ) {
  var ttt = TicTacToe();
  var test1;

  // 1. valid move
  // setup
  ttt.acceptInput( '1x1' );
  test1 = ttt.getBoard();
  // test condition
  console.log( test1[ 4 ] === 'x' );

  // what's wrong with immediately executing test 2 below?

  // 2. invalid move
  // setup
  ttt.acceptInput( '1x1' );
  test1 = ttt.getBoard();
  // test condition - should reject move, still store  x
  console.log( test1[ 4 ] === 'x' );
};
