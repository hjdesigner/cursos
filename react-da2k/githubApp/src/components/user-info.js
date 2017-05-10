'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>

    <img src='https://avatars0.githubusercontent.com/u/2280313?v=3' />

    <h1 className='username'>
      <a href='https://api.github.com/users/hjdesigner'>Henrique Rodrigues</a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositórios: 200</li>
      <li>- Seguidores: 10</li>
      <li>- Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
