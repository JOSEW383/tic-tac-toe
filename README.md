# Tic Tac Toe

This project is an implementation of the popular game Tic Tac Toe (also known as Noughts and Crosses) using the JavaScript library React.
<p><img src="https://github.com/JOSEW383/tic-tac-toe/blob/master/public/tic-tac-toe_demo.gif" alt="Demo" width="400" height="400" /></p>

## Game

The goal of the game is to get three symbols in a row, either horizontally, vertically, or diagonally. In this case, the symbols will be the letters "X" and "O", which the players will take turns placing on a 3x3 grid.

The first player will have the "X" symbols, and the second player will have the "O" symbols. The game begins with the first player placing a symbol on an empty square on the grid. The second player then places their symbol on another empty square, and so on until a player gets three symbols in a row.

## Features

This project includes the following features:

- Turn control: The game automatically alternates between player 1 and player 2's turns.
- Move validation: The game prevents a player from placing a symbol on a square that is already occupied.
- Game end detection: The game detects when a player has gotten three symbols in a row and announces the winner.
- Game reset: After a winner has been announced, the option to reset the game is offered to play another round.
- Save game: The game is save automatically so if the browser is closed it will continue in the same state when it returns

## Installation

To run this project, you need to have Node.js and npm installed on your computer. Follow these steps:

1. Clone the repository onto your local machine.
2. Open the terminal and navigate to the root folder of the project.
3. Run the following command to install the project's dependencies: `npm install`
4. Run the following command to start the development server:  `npm run dev`
5. Open your web browser and navigate to the following URL: `http://localhost:5173`


## Technologies Used

This project was developed using the following technologies:

- Vite
- React
- Javascript
- HTML
- CSS
