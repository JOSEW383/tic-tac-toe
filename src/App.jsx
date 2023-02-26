import { useState, useEffect } from 'react'
import Square from './components/Square'
import Winner from './components/WinnerModal';
import { checkWinner, TURNS, getNextTurn } from './utils/board'
import { saveGame, clearGame, getTurnStored, getBoardStored, getShowWinnerStored} from './utils/storage'
import Turn from './components/Turn';


function App() {
  const [currentTurn, setCurrentTurn] = useState(getTurnStored() || TURNS.A);
  const [board, setBoard] = useState(getBoardStored() || Array(9).fill(null));
  const [showWinner, setShowWinner] = useState(getShowWinnerStored() || false);


  useEffect(() => {
    saveGame(board, currentTurn, showWinner)
  }, [board, currentTurn, showWinner])


  function setValueOnBoard(index) {
    const newBoard = [...board]
    newBoard[index] = currentTurn
    setBoard(newBoard)
    const winner = checkWinner(newBoard)
    const emptyCells = newBoard.filter((cell) => !cell).length

    if (winner) {
      setShowWinner(true)
      return
    } else if (!emptyCells) {
      setCurrentTurn(null, setShowWinner(true))
      return
    }
    const nextTurn = getNextTurn(currentTurn)
    setCurrentTurn(nextTurn)
  }


  function restartGame() {
    setCurrentTurn(TURNS.A)
    setBoard(Array(9).fill(null))
    setShowWinner(false)
    clearGame()
  }


  return (
    <>
      <section className='game'>
        <h1>Tic Tac Toe</h1>
        <button onClick={restartGame}>Restart Game</button>

        <section className='board'>
          {board.map((square, index) => {
              return (
                <Square key={index} index={index} value={square} setValueOnBoard={setValueOnBoard} />
              );
            })
          }
        </section>

        <Turn turns={Object.values(TURNS)} currentTurn={currentTurn}/>

        {showWinner && <Winner currentTurn={currentTurn} restartGame={restartGame} />}

      </section>
    </>

  )
}

export default App
