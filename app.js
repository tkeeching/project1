console.log('tic tic tic');

var gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

var countXInFirstRow = 0;
var countXInSecondRow = 0;
var countXInThirdRow = 0;

var countXInFirstColumn = 0;
var countXInSecondColumn = 0;
var countXInThirdColumn = 0;

// check row
gameBoard.forEach((row, index) => {
  console.log(row);
  row.forEach((cell) => {
    if (index === 0) {
      if (cell === 'x') {
        countXInFirstRow++;
      }
    }

    if (index === 1) {
      if (cell === 'x') {
        countXInSecondRow++;
      }
    }

    if (index === 2) {
      if (cell === 'x') {
        countXInThirdRow++;
      }
    }
  })
})

// check column
gameBoard.forEach((column) => {
  console.log(column);
  column.forEach((cell, index) => {
    if (index === 0) {
      if (cell === 'x') {
        countXInFirstColumn++;
      }
    }

    if (index === 1) {
      if (cell === 'x') {
        countXInSecondColumn++;
      }
    }

    if (index === 2) {
      if (cell === 'x') {
        countXInThirdColumn++;
      }
    }
  })
})

// checks (safe to delete)
console.log(countXInFirstRow);
console.log(countXInSecondRow);
console.log(countXInThirdRow);
console.log(countXInFirstColumn);
console.log(countXInSecondColumn);
console.log(countXInThirdColumn);

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
      console.log('columnId: ' + columnId);
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


      console.log(playerTurn);
      console.log(movesLeft);
      console.log(gameBoard);
    } else if (playerTurn === 2 && movesLeft > 0) {
      e.target.classList.toggle('player-two');
      playerTurn = 1;
      movesLeft--;

      var columnId = e.target.id;
      console.log('columnId: ' + columnId);
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

      console.log(playerTurn);
      console.log(movesLeft);
      console.log(gameBoard);
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



