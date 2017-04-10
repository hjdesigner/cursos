'use strict'
import React from 'react'
import Button from './button.js'

const LikeButton = () => (
    <Button handleClick={() => alert('like button')}>Curtir</Button>
)
export default LikeButton