export const TURNS = {A:"❌", B:'⭕'};


export function checkWinner(board) {
    // Check horizontal wins
    for (let i = 0; i < 9; i += 3) {
      if (board[i] !== null && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
        return board[i];
      }
    }
  
    // Check vertical wins
    for (let i = 0; i < 3; i++) {
      if (board[i] !== null && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
        return board[i];
      }
    }
  
    // Check diagonal wins
    if (board[0] !== null && board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
    if (board[2] !== null && board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }
  
    // No winner found
    return null;
  }
  

export function getNextTurn(currentTurn){
    return currentTurn === TURNS.A ? TURNS.B : TURNS.A;
  }
