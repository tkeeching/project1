console.log('tic tic tic');

var gameBoard = [
  ['x', 'x', 'x'],
  ['x', 'x', 'x'],
  ['x', 'x', 'x'],
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

console.log(countXInFirstRow);
console.log(countXInSecondRow);
console.log(countXInThirdRow);
console.log(countXInFirstColumn);
console.log(countXInSecondColumn);
console.log(countXInThirdColumn);
