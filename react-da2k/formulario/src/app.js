'use strict'

import React, { Component } from 'react'
// import Forms from './forms'

class App extends Component {

  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        {/* <Forms /> */}
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={(e) => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar conteudo
        </label>
        {this.state.showContent && <div>Olha eu aqui</div>}
      </div>
    )
  }

}

export default App
