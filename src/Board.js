import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {

  state = {
    moves: ['apple', 'aubergine', 'carrot', 'cherry', 'grape', 'kiwi', 'lemon', 'orange', 'apple', 'aubergine', 'carrot', 'cherry', 'grape', 'kiwi', 'lemon', 'orange'],
    picks: []
  }

  flipCard = (flip) => {
    this.setState({
      picks: [...this.state.picks, flip],
    })
  }

  toggleRevealed = (index) => {
    const flips = this.state.moves.slice()
    flips[index] = !flips[index]
    this.setState({ moves: flips })
  }

  render () {
    return (
      <div className='memorygame'>
      <Square index={0} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[0]} revealed={this.state.picks.includes(0)} />
      <Square index={1} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[1]} revealed={this.state.picks.includes(1)} />
      <Square index={2} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[2]} revealed={this.state.picks.includes(2)} />
      <Square index={3} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[3]} revealed={this.state.picks.includes(3)} />
      <Square index={4} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[4]} revealed={this.state.picks.includes(4)} />
      <Square index={5} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[5]} revealed={this.state.picks.includes(5)} />
      <Square index={6} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[6]} revealed={this.state.picks.includes(6)} />
      <Square index={7} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[7]} revealed={this.state.picks.includes(7)} />
      <Square index={8} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[8]} revealed={this.state.picks.includes(8)} />
      <Square index={9} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[9]} revealed={this.state.picks.includes(9)} />
      <Square index={10} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[10]} revealed={this.state.picks.includes(10)} />
      <Square index={11} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[11]} revealed={this.state.picks.includes(11)} />
      <Square index={12} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[12]} revealed={this.state.picks.includes(12)} />
      <Square index={13} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[13]} revealed={this.state.picks.includes(13)} />
      <Square index={14} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[14]} revealed={this.state.picks.includes(14)} />
      <Square index={15} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[15]} revealed={this.state.picks.includes(15)} />
    </div>
  )
  }

}

export default Board
