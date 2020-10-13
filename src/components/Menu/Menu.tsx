import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/todo'>Todo</Link>
      <Link to='/star-wars'>Star Wars</Link>
    </nav>
  </>
)
