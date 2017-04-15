'use strict'

import React, { Component } from 'react'
// import Button from './button'
// import Square from './square'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      color: 'green',
      showTimer: true,
      time: 0
    }
  }

  componentWillMount () {
    console.log('Quando o componente foi montato')
  }
  componentDidMount () {
    console.log('É execultado logo após o componente ser rederizado')
  }
  render () {
    console.log('render')
    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props</button>
      </div>
    )
  }
  /* render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer time={this.state.time} />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show / hide timer</button>
      </div>
    )
  }

  /* render () {
    console.log('render')
    return (
      <div>
        <Square color={this.state.color}/>
        {['red', 'green', 'blue'].map((color) => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
   constructor () {
    super()
    this.state = {
      text: 'Henrique'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Outro Texto'
      })}>
          {this.state.text}
      </div>
    )
  } */
}

export default App
