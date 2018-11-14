import React from 'react'
import { Toolbar, Button } from 'react-md'
import { Link } from 'react-router-dom'

import navOptions from '../config/nav'

const Navbar = ({ location }) => {
  const children = (
    <nav className='topnav'>
      {navOptions.map((option, idx) => {
        return (
          <Link key={idx} className='topnav__link' to={option.to}>
            <Button className='topnav__link__btn' flat>
              {option.text}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
  return (
    <header>
      <Toolbar
        themed
        fixed
        children={children}
      />
    </header>
  )
}

export default Navbar
