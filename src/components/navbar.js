import React from 'react'
import { Button } from 'react-md'
import { Link } from 'react-router-dom'
import navOptions from '../config/nav'

const Navbar = ({ location }) => {
  const primaryPath = location.pathname.split('/')[1]

  return (
    <nav className='topnav'>
      {navOptions.map((option, idx) => {
        const btnPrimaryPath = option.to.split('/')[1]
        const btnClass = primaryPath === btnPrimaryPath
          ? 'topnav__link__btn topnav__link__btn--active'
          : 'topnav__link__btn'

        return (
          <Link key={idx} className='topnav__link' to={option.to}>
            <Button className={btnClass} flat>
              {option.text}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
