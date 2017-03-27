'use strict'

import React, { Component } from 'react';
import Title from './title';
import Square from './square';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Title name='Henrique' />
        {['blue','red','green'].map((square) => (
          <Square key={index} color={square} />
        ))}        
      </div>
    )
  }
}

Square.defaultProps = {
    color: 'red'
}

/* const App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Title name='Henrique' />
      </div>
    )
  }
}) */

export default App
