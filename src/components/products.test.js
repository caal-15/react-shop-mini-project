import React from 'react'
import { shallow } from 'enzyme'
import Products from './products'

describe('When Products Component is rendered', () => {

  const defaultProps = {
    products: [],
    fetching: false,
    error: null,
    filter: null,
    fetchProducts: jest.fn(),
    dismissError: jest.fn(),
    setFilter: jest.fn(),
    totalProducts: 0
  }

  it('Should render section', () => {
    const wrapper = shallow(<Products {...defaultProps} />)
    expect(wrapper.find('section.products').exists()).toBe(true)
  })
})
