import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Paper,
  List,
  ListItem,
  Subheader,
  FontIcon,
  Avatar,
  Divider,
  Drawer,
  Button,
  Toolbar
} from 'react-md'
import { match as matchPropType } from 'react-router-prop-types'

import categories from '../config/categories'

const propTypes = {
  match: matchPropType
}

class CategoryBar extends Component {

  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.handleVisibility = this.handleVisibility.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
  }

  handleVisibility(visible) {
    this.setState({ visible: visible })
  }

  openDrawer() {
    this.setState({ visible: true })
  }

  closeDrawer() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    const { match } = this.props
    const filter = match ? match.params.filter : null

    const closeBtn = <Button icon onClick={this.closeDrawer}>arrow_back</Button>
    const subcats = categories.map((category, idx) => {
      const secondaryRoute = category.to.split('/')[1]
      const linkClassName = secondaryRoute === filter
        ? 'category-bar__list__link category-bar__list__link--active'
        : 'category-bar__list__link'
      return (
        <Link
          key={idx}
          to={`/products${category.to}`}
          className={linkClassName}
        >
          <ListItem
            primaryText={category.text}
            leftAvatar={
              <Avatar icon={<FontIcon>{category.icon}</FontIcon>}/>
            }
          />
        </Link>
      )
    })

    const linkClassName = filter
      ? 'category-bar__list__link'
      : 'category-bar__list__link category-bar__list__link--active'
    const items = [
      <Link key={'all'} to='/products' className={linkClassName}>
        <ListItem
          primaryText='All'
          leftAvatar={<Avatar icon={<FontIcon>view_list</FontIcon>}/>}
        />
      </Link>,
      <Divider key='divider' />,
      ...subcats
    ]

    return ([
      <aside key='desktop' className='category-bar__wrapper'>
        <Paper zDepth={1} className='category-bar'>
          <List className='category-bar__list'>
            <Subheader primaryText='Categories' />
            {items}
          </List>
        </Paper>
      </aside>,
      <aside key='mobile'>
        <Button
          primary
          id='category-drawer-button'
          raised
          iconChildren='assignment'
          onClick={this.openDrawer}
        >
          Categories
        </Button>
        <Drawer
          id='category-drawer'
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          position='left'
          onVisibilityChange={this.handleVisibility}
          children={<List>{items}</List>}
          header={(
            <Toolbar
              actions={closeBtn}
              className="md-divider-border md-divider-border--bottom"
            />
          )}
        />
      </aside>
    ])
  }
}

CategoryBar.propTypes = propTypes

export default CategoryBar
