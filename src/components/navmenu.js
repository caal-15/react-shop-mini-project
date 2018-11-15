import React from 'react'
import { MenuButton, Button } from 'react-md'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import navOptions from '../config/nav'

const propTypes = {
  id: PropTypes.string.isRequired
}

const Navmenu = ({id}) => {
  const items = navOptions.map((option, idx) => {
    return (
      <Link key={idx} to={option.to} >
        <Button className='menunav__btn' flat>{option.text}</Button>
      </Link>
    )
  })
  return (
    <nav className='menunav'>
      <MenuButton
        id={id}
        icon
        menuItems={items}
        iconChildren="list"
      />
    </nav>
  )
}

Navmenu.propTypes = propTypes

export default Navmenu
