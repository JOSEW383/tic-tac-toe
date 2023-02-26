import confetti from 'canvas-confetti';
import Square from './Square';

function Winner(props) {
    const currentTurn = props.currentTurn && props.currentTurn != "null" ? props.currentTurn : null;
    const title = currentTurn ? 'Winner' : 'Tie';

    function close(){
        props.restartGame()
    }

    if(currentTurn){confetti()}

    return (
        <>
        <section className='winner' onClick={close}>
            <div className='text'>
                <h2>{title}</h2>
                <Square value={currentTurn} />
                <button onClick={close}>Restart Game</button>
            </div>

        </section>

        </>
    )
}

export default Winner
