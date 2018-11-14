import React from 'react'
import { Toolbar } from 'react-md'

import Navbar from './navbar'
import Navmenu from './navmenu'

const Header = ({ location }) => {
  const children = <Navbar location={location} />
  return (
    <header>
      <Toolbar
        themed
        fixed
        children={children}
        actions={<Navmenu id='navigation-menu-1' />}
      />
    </header>
  )
}

export default Header
