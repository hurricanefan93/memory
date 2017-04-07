import React, {Component} from 'react'

class Modal extends Component {

render () {
  return (
    <div className='overlay'>
      <div className='dialog'>
        <h3>GAME OVER</h3>
        <button>Play Again</button>
      </div>
    </div>
  )
}
}

export default Modal
