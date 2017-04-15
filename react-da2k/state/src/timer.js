'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
        this.timer
    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
        console.log('Essa funcão foi execultada quando o componente saiu da tela')
    }
    render () {
        return <div> Timer: {this.state.time}</div>
    }
}

export default Timer
