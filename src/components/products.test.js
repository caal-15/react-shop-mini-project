import React from 'react'
import { shallow } from 'enzyme'
import Products from './products'

describe('When Products Component is rendered', () => {

  let defaultProps

  beforeEach(() => {
    defaultProps = {
      products: [],
      fetching: false,
      error: null,
      filter: null,
      fetchProducts: jest.fn(),
      dismissError: jest.fn(),
      setFilter: jest.fn(),
      totalProducts: 0,
      lastSuccessfulFetch: null
    }
  })

  it('Should render section and call fetchProducts', () => {
    const wrapper = shallow(<Products {...defaultProps} />)
    expect(wrapper.find('section.products').exists()).toBe(true)
    expect(defaultProps.fetchProducts).toHaveBeenCalledTimes(1)
  })

  it('Should not call fetch Products if time has not passed', () => {
    const {
      products,
      fetching,
      error,
      filter,
      fetchProducts,
      dismissError,
      setFilter,
      totalProducts
    } = defaultProps

    const props = {
      products,
      fetching,
      error,
      filter,
      fetchProducts,
      dismissError,
      setFilter,
      totalProducts,
      lastSuccessfulFetch: new Date()
    }

    shallow(<Products {...props} />)
    expect(fetchProducts).toHaveBeenCalledTimes(0)
  })
})
