# The Game Plan

## Coding Approach
1. [ ] check individual section
  - [ ] check for number of 'x's and 'o's in a row
  - [ ] check for number of 'x's and 'o's in a column
  - [ ] check for number of 'x's and 'o's in a forward diagonal
  - [ ] check for number of 'x's and 'o's in a backward diagonal

2. [ ] check all sections as a board
3. [ ] create test case to simulate all possible moves
4. [ ] apply css styling



## Game Logic
```
1. initialize game board
2. start game
3. player 1 makes their move
4. player 2 makes their move
5. check for winner
6. if there is no winner, repeat step 3 to 5
7. if there is a winner, stop the game
8. announce winner
9. display congratulatory message
10. show option to restart the game
```

## Check Winner Logic

```
1. if any column has three 'x's in total, winner is 'x'
2. if any column has three 'o's in total, winner is 'o'
3. if any row has three 'x's in total, winner is 'x'
4. if any row has three 'o's in total, winner is 'o'
5. if any forward diagonal has three 'x's in total, winner is 'x'
6. if any forward diagonal has three 'o's in total, winner is 'o'
7. if any backward diagonal has three 'x's in total, winner is 'x'
8. if any backward diagonal has three 'o's in total, winner is 'o'
9. if none of the above is true, its a draw
10. update score tally
```

## Possible Features
1. display a score tally
2. display congratulatory animation when there is a winner
3. play congratulatory tune when there is a winner
4. themed 'x's and 'o's

## UI Direction
1. Mobile First