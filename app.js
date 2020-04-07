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
gameBoard.forEach( (row, index) => {
  console.log(row);
  row.forEach( (cell) => {
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
gameBoard.forEach( (column) => {
  console.log(column);
  column.forEach( (cell, index) => {
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


// pushing to rows
var player = 1;

if (player === 1) {
  
}

// add event listeners to game board
var gameCell = document.querySelectorAll('.column');

var playerTurn = 1;
var movesLeft = 9;

var handlePlay = (e) => {
  if (playerTurn === 1 && movesLeft > 0) {
    e.target.classList.toggle('player-one');
    playerTurn = 2;
    movesLeft--;
  } else if (playerTurn === 2 && movesLeft > 0) {
    e.target.classList.toggle('player-two');
    playerTurn = 1;
    movesLeft--;
  }
}

gameCell.forEach( (cell) => {
  cell.addEventListener('click', handlePlay);
})


