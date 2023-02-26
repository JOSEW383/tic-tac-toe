function Turn(props) {

  return (
    <>
        <section className='turn'>
          {props.turns.map((turn) => {
            const turnClassName = 'square'.concat(turn === props.currentTurn ? " is-selected" : "")
            return (
              <button key={turn} className={turnClassName}>{turn}</button>
            )
          })}
        </section>
    </>
  )
}

export default Turn
