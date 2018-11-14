import React from 'react'
import { Toolbar } from 'react-md'

import Navbar from './navbar'

const Header = ({ location }) => {
  const children = <Navbar location={location} />
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

export default Header
