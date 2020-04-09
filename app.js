var gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

var winner = 0;
var previousWinner = 0;
var playerOneRowCheck = 0;
var playerOneColumnCheck = 0;
var playerOneForwardDiagCheck = 0;
var playerOneBackwardDiagCheck = 0;
var playerTwoRowCheck = 0;
var playerTwoColumnCheck = 0;
var playerTwoForwardDiagCheck = 0;
var playerTwoBackwardDiagCheck = 0;

// Declare game logic functions
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
    }
  }
}

var checkBackwardDiagonalForWinner = () => {
  playerOneBackwardDiagCheck = 0;
  playerTwoBackwardDiagCheck = 0;
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
  }
}

var announceWinner = () => {
  if (winner === 1) {
  gameBoardDisplay.forEach( (row) => {
    row.classList.toggle('game-over');
  })
  announcementText.textContent = `Player ${ winner } wins!`;
} else if (winner === 2) {
  gameBoardDisplay.forEach( (row) => {
    row.classList.toggle('game-over');
  })
  announcementText.textContent = `Player ${ winner } wins!`;
} else if (movesLeft === 0 && winner === 0) {
  gameBoardDisplay.forEach( (row) => {
    row.classList.toggle('game-over');
  })
  announcementText.textContent = `It's a draw`;
}
}

// add event handlers to game board
var gameCell = document.querySelectorAll('.column');
var newGameBtn = document.querySelector('.new-game-btn');
var trainingBtn = document.querySelector('.training-btn');
var gameBoardDisplay = document.querySelectorAll('.row');
var announcementText = document.querySelector('.announcement-text');
var funFactDisplay = document.querySelector('.fun-fact-text');

var playerTurn = 1;
var movesLeft = 9;

var handlePlay = (e, waitForPlayerTimerId) => {
  if (e.target.className === 'column' && winner === 0) {
    if (playerTurn === 1 && movesLeft > 0) {
      e.target.classList.toggle('player-one');
      playerTurn = 2;
      movesLeft--;

      announcementText.textContent = `Player ${ playerTurn }'s turn`;

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

    } else if (playerTurn === 2 && movesLeft > 0) {
      e.target.classList.toggle('player-two');
      playerTurn = 1;
      movesLeft--;
      announcementText.textContent = `Player ${ playerTurn }'s turn`;

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

  checkRowsForWinner();
  checkColumnsForWinner();
  checkForwardDiagonalForWinner();
  checkBackwardDiagonalForWinner();
  announceWinner();

  previousWinner = winner;

  if (winner === 0 && movesLeft === 0) {
    console.log('its a draw!');
  }
}

var handleNewGame = () => {
  console.log('it\'s a new game');

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
  movesLeft = 9;

  if (previousWinner === 1) {
    playerTurn = 2;
  } else if (previousWinner === 2){
    playerTurn = 1;
  } else {
    playerTurn = Math.ceil(Math.random() * 2);
  }

  gameCell.forEach((cell) => {
    cell.className = 'column';
  })

  gameBoardDisplay.forEach( (row) => {
    row.classList.remove('game-over');
  })

  gameBoardDisplay.forEach( (row) => {
    row.style.height = 'initial';
    row.style.backgroundColor = 'white';
  })

  gameCell.forEach( (cell) => {
    cell.style.border = '1px solid lightgray';
  })

  newGameBtn.textContent = 'Restart';
  announcementText.textContent = `Player ${ playerTurn }'s turn`;
}

var handleWelcome = () => {
  console.log('tic tic tic');

  gameBoardDisplay.forEach( (row) => {
    row.style.height = '0px';
  })

  gameCell.forEach( (cell) => {
    cell.style.border = 'none';
  })

  funFactDisplay.textContent = `The word "Tic" is kind of an Americanization. In the 1800s, the game also had the name in England of "Tit-Tat-Toe". A "tit" was another word for a slap. "Tat" meant retribution, such as "going tit-for-tat". "Toe" was the name for a third thing in a row.`;

  announcementText.textContent = 'Click New Game to start...';
}

gameCell.forEach((cell) => {
  cell.addEventListener('click', handlePlay);
})

newGameBtn.addEventListener('click', handleNewGame);
window.addEventListener('load', handleWelcome);
