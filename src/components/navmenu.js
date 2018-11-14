import React from 'react'
import { MenuButton, ListItem, Button } from 'react-md'
import { Link } from 'react-router-dom'

import navOptions from '../config/nav'

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

export default Navmenu
