# Tic Tac Toe
A game of tic tac toe

[Demo](https://tkeeching.github.io/project1/)

## Stack
- HTML
- CSS
- JavaScript

## Game Logic
1. Game play
- The game starts with Player 1 making the first move by clicking on any of the nine tiles, a digit '1' is assigned to the corresponding cell on the game board which is stored in an array that consists of three 1x3 array.
- Check is immediately carried out to determine if there is a winner
- If there is no winner, Player 2 makes their first move, a digit '2' is assigned to the corresponding cell which is stored in the above-mentioned array. 
- Check for winner
- If there is no winner, Player 1 makes their next move
- step 2 to 5 is repeated until,
    - a winner is determined. in this case, game play will terminate immediately and no futher move is allowed. Or,
    - if all nine tiles are occupied and there is no winner, it is a draw and the game play terminates.

2. Check winner logic
- The logic to check for winner is broken down into four parts,
    - Part 1 - Check rows - interate through each row, if a row consist of 3 '1's - winner is Player 1, if a row consists of 3 '2's - winner is Player 2.
    - Part 2 - Check columns - the game board is transposed and stored under a new variable. The columns now become the rows. A similar checking algorithm used in Part 1 is applied here to check for winner.
    - Part 3 - Check forward diagonal - the cells in the forward diagonal are being checked by utilising their row and column indices respectively which happened to be identical in each grid, ie. [0][0], [1][1] and [2][2] for a 3x3 grids. If those cells consist of 3 '1's - winner is Player 1, if they consist of 3 '2's - winner is Player 2.
    - Part 4 - Check backward diagonal - the cells in the backward diagonal are being checked by hardcording their row and column indices. If those cells consist of 3 '1's - winner is Player 1, if they consist of 3 '2's - winner is Player 2.


## Unsolved Problems
1. Implementation of scoreboard
- Scores are already being recorded internally, next step is to extract these information and display them on the screen.
2. Implementation of training mode that allows player to play against computer.
- This can be implemented with the following 3 cases,
    - Case 1 - Dumb algorithm: Randomly generate a number between 1 - 9 which corresponds to the cell number on the game board. If the particular cell has not been played, computer will play that move and turn is over. Repeat until there is a winner.
    - Case 2 - Winning algorithm: Perform checks to find winning moves, ie. find row/column/diagonal with the most number of '1' (computer's token), computer will play the remaining cells to complete the set of three.
    - Case 3 - Blocking algorithm: Perform checks to determind Player is about to win, ie. find row/column/diagonal with the most number of '2' (player's token), computer will play the remaining cells to prevent Player from winning.

