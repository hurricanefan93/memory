import React, { Component } from 'react'

class Square extends Component {

  _click = () => {
    this.props.flipCard(this.props.index)
    }

  render() {
      const revealed = this.props.revealed ? 'revealed' : ''
      return <div id='card' className={`${this.props.value} memorysquare ${revealed}`} onClick={this._click}></div>
    }
  }

export default Square
