import React, { Component } from 'react'
import { CircularProgress, Snackbar, Button } from 'react-md'
import PropTypes from 'prop-types'

import ProductList from './productList'
import ProductGrid from './productGrid'
import productPropType from '../proptypes/product'

const propTypes = {
  products: PropTypes.arrayOf(productPropType),
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  filter: PropTypes.string,
  fetchProducts: PropTypes.func.isRequired,
  dismissError: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { list: true }
    this.showList = this.showList.bind(this)
    this.showGrid = this.showGrid.bind(this)
  }

  componentDidMount() {
    const { fetchProducts, filter, setFilter, match } = this.props
    fetchProducts()
    const newFilter = match ? match.params.filter : null
    if (filter !== newFilter) {
      setFilter(newFilter)
    }
  }

  componentDidUpdate(prevProps) {
    const { match, setFilter } = this.props
    const newFilter = match ? match.params.filter : null

    const { filter } = prevProps
    if (filter !== newFilter) {
      setFilter(newFilter)
    }
  }

  showList() {
    this.setState({ list: true })
  }

  showGrid() {
    this.setState({ list: false })
  }

  render() {
    const { fetching, products, error, dismissError } = this.props
    const { list } = this.state
    const toasts = error ? [{ text: error }] : []
    return (
      <section className='products'>
        <div className='products__toolbar'>
          <div className ='products__toolbar__mode'>
            <Button onClick={this.showList} icon>list</Button>
            <Button onClick={this.showGrid} icon>view_module</Button>
          </div>
        </div>
        {fetching
          ? <div className='wait-container'>
            <CircularProgress id='products-loading' />
          </div>
          : list
            ? <ProductList products={products} />
            : <ProductGrid products={products} />
        }
        <Snackbar
          id='products-error'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </section>
    )
  }
}

Products.propTypes = propTypes

export default Products
