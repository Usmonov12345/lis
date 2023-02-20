import React from 'react'
import {Link} from 'react-router-dom'
function header() {
  return (
    <header className='header'>
      <h1>salom</h1>
    <ul className='list'>
        <li>
            <Link to='/About'>About</Link>
        </li>
        <li>
        <Link to='/Home'>Home</Link>
        </li>
        <li>
        <Link to='/Main'>Main</Link>
        </li>
    </ul></header>
  )
}

export default header