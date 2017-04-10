'use strict'

import React, { Component } from 'react'
// import Square from './square';
// import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
          <LikeButton/>
          <SearchButton/>
      </div>
    )
  }
}

/*
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
*/

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
