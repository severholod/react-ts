import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.sass'
const logo = require('../../assets/logo.jpg')

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header-nav">
        <NavLink to="/users" className="header-nav__link">
          TO USERS
        </NavLink>
      </nav>
    </header>
  )
}
