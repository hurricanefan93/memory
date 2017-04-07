import React, { Component } from 'react'
import Square from './Square'
import Modal from './Modal'

class Board extends Component {

  state = {
    moves: ['alien1', 'alien2', 'alien3', 'alien4', 'alien5', 'alien6', 'alien7', 'alien8', 'alien1', 'alien2', 'alien3', 'alien4', 'alien5', 'alien6', 'alien7', 'alien8'],
    picks: [],
    matched: [],
    gameOver: false
  }

  checkCard = (newCard) => {
    if (this.state.picks.includes(newCard)) return
    if (this.state.picks.length < 2) {
      this.setState({
        picks: [...this.state.picks, newCard]
      }, () => {
        if (this.state.picks.length === 2) {
          this.check()
        }
      })
    }
  }

  check () {
    if(this.state.moves[this.state.picks[0]] === this.state.moves[this.state.picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...this.state.picks]
    }, () => {
      if (this.state.matched.length === this.state.moves.length){
        window.setTimeout(() => {
          this.setState({
            picks: [],
            matched: [],
            gameOver: true
          })
        }, 1800)
      }
    })
    }
    window.setTimeout(() => {
      this.setState({
        picks: []
      })
    }, )
  }


  render () {
    if (this.state.gameOver) {
      return <Modal/>
    } else {
    return (
      <div className='memorygame'>
      <Square index={0} move={this.state.moves[0]} checkCard={this.checkCard} hidden={!this.state.picks.includes(0)} matched={this.state.matched.includes(0)} />
      <Square index={1} move={this.state.moves[1]} checkCard={this.checkCard} hidden={!this.state.picks.includes(1)} matched={this.state.matched.includes(1)} />
      <Square index={2} move={this.state.moves[2]} checkCard={this.checkCard} hidden={!this.state.picks.includes(2)} matched={this.state.matched.includes(2)} />
      <Square index={3} move={this.state.moves[3]} checkCard={this.checkCard} hidden={!this.state.picks.includes(3)} matched={this.state.matched.includes(3)} />
      <Square index={4} move={this.state.moves[4]} checkCard={this.checkCard} hidden={!this.state.picks.includes(4)} matched={this.state.matched.includes(4)} />
      <Square index={5} move={this.state.moves[5]} checkCard={this.checkCard} hidden={!this.state.picks.includes(5)} matched={this.state.matched.includes(5)} />
      <Square index={6} move={this.state.moves[6]} checkCard={this.checkCard} hidden={!this.state.picks.includes(6)} matched={this.state.matched.includes(6)} />
      <Square index={7} move={this.state.moves[7]} checkCard={this.checkCard} hidden={!this.state.picks.includes(7)} matched={this.state.matched.includes(7)} />
      <Square index={8} move={this.state.moves[8]} checkCard={this.checkCard} hidden={!this.state.picks.includes(8)} matched={this.state.matched.includes(8)} />
      <Square index={9} move={this.state.moves[9]} checkCard={this.checkCard} hidden={!this.state.picks.includes(9)} matched={this.state.matched.includes(9)} />
      <Square index={10} move={this.state.moves[10]} checkCard={this.checkCard} hidden={!this.state.picks.includes(10)} matched={this.state.matched.includes(10)} />
      <Square index={11} move={this.state.moves[11]} checkCard={this.checkCard} hidden={!this.state.picks.includes(11)} matched={this.state.matched.includes(11)} />
      <Square index={12} move={this.state.moves[12]} checkCard={this.checkCard} hidden={!this.state.picks.includes(12)} matched={this.state.matched.includes(12)} />
      <Square index={13} move={this.state.moves[13]} checkCard={this.checkCard} hidden={!this.state.picks.includes(13)} matched={this.state.matched.includes(13)} />
      <Square index={14} move={this.state.moves[14]} checkCard={this.checkCard} hidden={!this.state.picks.includes(14)} matched={this.state.matched.includes(14)} />
      <Square index={15} move={this.state.moves[15]} checkCard={this.checkCard} hidden={!this.state.picks.includes(15)} matched={this.state.matched.includes(15)} />
      </div>
      )
    }
  }
}

export default Board
