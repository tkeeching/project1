console.log('tic tic tic');

var gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

var winner = 0;
var rowCheck = 0;
var columnCheck = 0;
var forwardDiagCheck = 0;
var backwardDiagCheck = 0;

var checkRowsForWinner = () => {
  gameBoard.forEach( (row, rowIndex) => {
    rowCheck = 0;
    row.forEach( (cell, columnIndex) => {
      if (cell === 1) {
        rowCheck++;
        if (rowCheck === 3) {
          winner = 1;
          console.log('row congrats, player ' + winner);
        }
      } 
    })
  })
}

var checkColumnsForWinner = () => {
  var transposedGameBoard = gameBoard.map( (col, i) => gameBoard.map( row => row[i]));

  transposedGameBoard.forEach( (row, rowIndex) => {
    columnCheck = 0;
    row.forEach( (cell, columnIndex) => {
      if (cell === 1) {
        columnCheck++;
        if (columnCheck === 3) {
          winner = 1;
          console.log('column congrats, player ' + winner);
        }
      }
    })
  })
}

var checkForwardDiagonalForWinner = () => {
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i][i] === 1) {
      forwardDiagCheck++;
      if (forwardDiagCheck === 3) {
        winner = 1;
        console.log('forw congrats, player ' + winner);
      }
    } else {
      forwardDiagCheck = 0;
      return
    }
  }
}

var checkBackwardDiagonalForWinner = () => {
  if (gameBoard[0][2] === 1) {
    backwardDiagCheck++;
  } else {
    backwardDiagCheck = 0;
    return
  }

  if (gameBoard[1][1] === 1) {
    backwardDiagCheck++;
  } else {
    backwardDiagCheck = 0;
    return
  }

  if (gameBoard[2][0] === 1) {
    backwardDiagCheck++;
    if (backwardDiagCheck === 3) {
      winner = 1;
      console.log('back congrats player ' + winner);
    }
  } else {
    backwardDiagCheck = 0;
    return
  }
}


// add event listeners to game board
var gameCell = document.querySelectorAll('.column');
var newGameBtn = document.querySelector('.new-game-btn');

var playerTurn = 1;
var movesLeft = 9;

var handlePlay = (e) => {
  if (e.target.className === 'column') {
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

      // check for winner
      checkRowsForWinner();
      checkColumnsForWinner();
      checkForwardDiagonalForWinner();
      checkBackwardDiagonalForWinner();
      
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
    }
  } else {
    return 'Invalid move';
  }
}

var handleNewGame = () => {
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



