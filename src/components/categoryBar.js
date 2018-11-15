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

import categories from '../config/categories'

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
    const closeBtn = <Button icon onClick={this.closeDrawer}>arrow_back</Button>
    const subcats = categories.map(category => {
      return (
        <Link
          to={`/products${category.to}`}
          className='category-bar__list__link'
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
    const items = [
      <Link to='/products' className='category-bar__list__link'>
        <ListItem
          primaryText='All'
          leftAvatar={<Avatar icon={<FontIcon>view_list</FontIcon>}/>}
        />
      </Link>,
      <Divider />,
      ...subcats
    ]
    const { visible } = this.state
    return ([
      <aside className='category-bar__wrapper'>
        <Paper zDepth={1} className='category-bar'>
          <List className='category-bar__list'>
            <Subheader primaryText='Categories' />
            {items}
          </List>
        </Paper>
      </aside>,
      <aside>
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
export default CategoryBar
