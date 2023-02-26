function Square(props) {

    function handlerClick(){
        if (props.value) return
        props.setValueOnBoard(props.index)
    }

  return (
    <>
      <button className='square' onClick={handlerClick}>
        {props.value}
      </button>
    </>
  )
}

export default Square
