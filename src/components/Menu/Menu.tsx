import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

export default () => (
  <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/todo'>Todo</Link>
      <Link to='/star-wars'>Star Wars</Link>
    </nav>
  </>
)
