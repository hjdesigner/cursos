'use strict'

import React, { Component } from 'react'
// import Square from './square';
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
          <Button>
            <span>Texto </span>
            outro texto
          </Button>
      </div>
    )
  }
}

/* 
class App extends Component {
  render () {
    return (
      <div className="container" onClick={ (e) => {
        alert('clicou');
      }}>
          <Square />
      </div>
    )
  }
}

*/

export default App
