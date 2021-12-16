import React from 'react'
import { Navbar,Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {
  return (
    <nav className='main-container'>
      <Link style={{ "textDecoration": "none" }} to="/">
      <div className='logo'>CoinFo</div>
      </Link>
      </nav>
  )
}

export default NavigationBar
