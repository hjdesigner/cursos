'use strict'

import React from 'react'

/* const Title = () => <h1>Olá Henrique</h1>

 const Title = function () {
  return (
    <h1> Olá {props.name}!</h1>
  )
 } */

/* const Title = (props) => (
  <h1>Olá {`${props.name}  ${props.lastName}`}!</h1>
) */

const Title = ({name, lastName}) => (
  <h1>Olá {`${name}  ${lastName}`}!</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome!!'
}
/* const Title = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Desconhecido',
      lastName: 'Sem sobrenome!!'
    }
  },
  render: function(){
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastName}!</h1>
      <h1>Olá {this.props.name || 'Desconhecido'}!</h1>
    )
  }
}) */

export default Title