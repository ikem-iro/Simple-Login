import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className='navbar-logo'>Simple- Login App</h2>
        <ul className='navbar-items'>
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
        </ul>
    </div>
  )
}

export default Navbar