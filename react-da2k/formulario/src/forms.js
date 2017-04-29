'use strict'

import React, { Component } from 'react'

class Forms extends Component {

  constructor () {
    super()
    this.state = {
      value: 'valor inicial',
      checked: false
      // value: '2'
    }
  }
    
  render () {

      return (
        <div>
          <form onSubmit={(e) => {
            e.preventDefault()
            console.log('event', e)
          }}
          onChange={(e) => {
            console.log('name', e.target.name)
            console.log('value', e.target.value)
          }}>

          <input type='text' name='name' value={this.state.value} onChange={(e) => {
              console.log(e.target)
              this.setState({
                value: e.target.value
              })
            }} />
            <br /><br />
            <label>
              <input type='checkbox' value='my-checkbox' checked={this.state.checked} onChange={(e) => this.setState({ checked: e.target.checked })} />
              Checkbox
            </label>
            <br /><br />
            <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
            <input type='radio' name='rd' value='2' /> Radio 2
            <br /><br />
            {/* <select value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }}>
              <option value='1'>Opção 1</option>
              <option value='2'>Opção 2</option>
              <option value='3'>Opção 3</option>
            </select> */}
            <br /><br />
            <textarea name='textarea' defaultValue='textarea' />
            <br /><br />
            <button type='submit'>Enviar</button>
          </form>
        </div>
      )
  }
}

export default Forms
