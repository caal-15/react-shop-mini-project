import React from 'react'
import { Toolbar } from 'react-md'
import { location as locationPropType } from 'react-router-prop-types'

import Navbar from './navbar'
import Navmenu from './navmenu'

const propTypes = {
  location: locationPropType.isRequired
}

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

Header.propTypes = propTypes

export default Header
