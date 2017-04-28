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
    componentWillReceiveProps (nextProps){
        console.log('componentWillReceiveProps', this.props, nextProps)
    }
    shouldComponentUpdate (nextProps, nextState){
        // console.log('shouldComponentUpdate time', this.props, nextProps)
        return this.props.time !== nextProps.time
        // return true
    }
    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate time', this.props, nextProps)
    }
    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate time', this.props, prevProps)
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
