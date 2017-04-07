import React, { Component } from 'react'

class Square extends Component {

  _click = () => {
    this.props.checkCard(this.props.index)
    }

  render() {
      const hidden = this.props.hidden ? 'hidden' : null
      const matched = this.props.matched ? 'matched' : null
      return <div id='card' className='memorysquare' onClick={this._click}>
        <div className={[this.props.move, hidden, matched].join(' ')}></div>
        </div>
    }
  }

export default Square
