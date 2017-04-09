import React, { Component } from 'react'
import Board from './Board'

class App extends Component {

  render() {
    return (
        <div className='memorygame'>
          <Board />
          <form>
          <button className='reset'> RESET </button>
          </form>
        </div>
    )
  }
}

export default App
