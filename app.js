console.log('tic tic tic');

var gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

var winner = 0;
var playerOneRowCheck = 0;
var playerOneColumnCheck = 0;
var playerOneForwardDiagCheck = 0;
var playerOneBackwardDiagCheck = 0;
var playerTwoRowCheck = 0;
var playerTwoColumnCheck = 0;
var playerTwoForwardDiagCheck = 0;
var playerTwoBackwardDiagCheck = 0;

var checkRowsForWinner = () => {
  gameBoard.forEach( (row, rowIndex) => {
    playerOneRowCheck = 0;
    playerTwoRowCheck = 0;
    row.forEach( (cell, columnIndex) => {
      if (cell === 1) {
        playerOneRowCheck++;
        if (playerOneRowCheck === 3) {
          winner = 1;
          console.log('row congrats, player ' + winner);
          return 'Game ends';
        }
      } else if (cell === 2) {
        playerTwoRowCheck++;
        if (playerTwoRowCheck === 3) {
          winner = 2;
          console.log('row congrats, player ' + winner);
          return 'Game ends';
        }
      }
    })
  })
}

var checkColumnsForWinner = () => {
  var transposedGameBoard = gameBoard.map( (col, i) => gameBoard.map( row => row[i]));

  transposedGameBoard.forEach( (row, rowIndex) => {
    playerOneColumnCheck = 0;
    playerTwoColumnCheck = 0;
    row.forEach( (cell, columnIndex) => {
      if (cell === 1) {
        playerOneColumnCheck++;
        if (playerOneColumnCheck === 3) {
          winner = 1;
          console.log('column congrats, player ' + winner);
        }
      } else if (cell === 2) {
        playerTwoColumnCheck++;
        if (playerTwoColumnCheck === 3) {
          winner = 2;
          console.log('column congrats, player ' + winner);
        }
      }
    })
  })
}

var checkForwardDiagonalForWinner = () => {
  playerOneForwardDiagCheck = 0;
  playerTwoForwardDiagCheck = 0;
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i][i] === 1) {
      playerOneForwardDiagCheck++;
      if (playerOneForwardDiagCheck === 3) {
        winner = 1;
        console.log('forw congrats, player ' + winner);
        return 'Game ends';
      }
    } else if (gameBoard[i][i] === 2) {
      playerTwoForwardDiagCheck++;
      if (playerTwoForwardDiagCheck === 3) {
        winner = 2;
        console.log('forw congrats, player ' + winner);
        return 'Game ends';
      }
    } else {
      playerOneForwardDiagCheck = 0;
      playerTwoForwardDiagCheck = 0;
      return
    }
  }
}

var checkBackwardDiagonalForWinner = () => {
  if (gameBoard[0][2] === 1) {
    playerOneBackwardDiagCheck++;
  } else if (gameBoard[0][2] === 2) {
    playerTwoBackwardDiagCheck++;
  } else {
    playerOneBackwardDiagCheck = 0;
    playerTwoBackwardDiagCheck = 0;
    return
  }

  if (gameBoard[1][1] === 1) {
    playerOneBackwardDiagCheck++;
  } else if (gameBoard[1][1] === 2) {
    playerTwoBackwardDiagCheck++;
  } else {
    playerOneBackwardDiagCheck = 0;
    playerTwoBackwardDiagCheck = 0;
    return
  }

  if (gameBoard[2][0] === 1) {
    playerOneBackwardDiagCheck++;
    if (playerOneBackwardDiagCheck === 3) {
      winner = 1;
      console.log('back congrats player ' + winner);
      return 'Game ends';
    } 
  } else if (gameBoard[2][0] === 2) {
    playerTwoBackwardDiagCheck++;
    if (playerTwoBackwardDiagCheck === 3) {
      winner = 2;
      console.log('back congrats player ' + winner);
      return 'Game ends';
    }
  } else {
    playerOneBackwardDiagCheck = 0;
    playerTwoBackwardDiagCheck = 0;
    return
  }
}


// add event listeners to game board
var gameCell = document.querySelectorAll('.column');
var newGameBtn = document.querySelector('.new-game-btn');

var playerTurn = 1;
var movesLeft = 9;

var handlePlay = (e) => {
  if (e.target.className === 'column' && winner === 0) {
    if (playerTurn === 1 && movesLeft > 0) {
      e.target.classList.toggle('player-one');
      playerTurn = 2;
      movesLeft--;

      // keep track of player 1's moves
      var columnId = e.target.id;
      switch (columnId) {
        case '1':
          gameBoard[0][0] = 1;
          break;

        case '2':
          gameBoard[0][1] = 1;
          break;

        case '3':
          gameBoard[0][2] = 1;
          break;

        case '4':
          gameBoard[1][0] = 1;
          break;

        case '5':
          gameBoard[1][1] = 1;
          break;

        case '6':
          gameBoard[1][2] = 1;
          break;

        case '7':
          gameBoard[2][0] = 1;
          break;

        case '8':
          gameBoard[2][1] = 1;
          break;

        case '9':
          gameBoard[2][2] = 1;
          break;
      }
      
      // // check for winner
      // checkRowsForWinner();
      // checkColumnsForWinner();
      // checkForwardDiagonalForWinner();
      // checkBackwardDiagonalForWinner();

      if (movesLeft === 0 && winner === 0) {
        console.log('its a draw!');
      }

    } else if (playerTurn === 2 && movesLeft > 0) {
      e.target.classList.toggle('player-two');
      playerTurn = 1;
      movesLeft--;

      var columnId = e.target.id;
      switch (columnId) {
        case '1':
          gameBoard[0][0] = 2;
          break;

        case '2':
          gameBoard[0][1] = 2;
          break;

        case '3':
          gameBoard[0][2] = 2;
          break;

        case '4':
          gameBoard[1][0] = 2;
          break;

        case '5':
          gameBoard[1][1] = 2;
          break;

        case '6':
          gameBoard[1][2] = 2;
          break;

        case '7':
          gameBoard[2][0] = 2;
          break;

        case '8':
          gameBoard[2][1] = 2;
          break;

        case '9':
          gameBoard[2][2] = 2;
          break;
      }

      // check for winner


      if (movesLeft === 0 && winner === 0) {
        console.log('its a draw!');
      }
    }
  } else {
    return 'Invalid move';
  }

  checkRowsForWinner();
  checkColumnsForWinner();
  checkForwardDiagonalForWinner();
  checkBackwardDiagonalForWinner();
}

var handleNewGame = () => {
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  winner = 0;
  playerOneRowCheck = 0;
  playerOneColumnCheck = 0;
  playerOneForwardDiagCheck = 0;
  playerOneBackwardDiagCheck = 0;
  playerTurn = 1;
  movesLeft = 9;

  gameCell.forEach((cell) => {
    cell.className = 'column';
  })
}

gameCell.forEach((cell) => {
  cell.addEventListener('click', handlePlay);
})

newGameBtn.addEventListener('click', handleNewGame);



