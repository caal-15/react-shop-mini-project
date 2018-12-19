import React, { Component } from 'react'
import {
  CircularProgress,
  Snackbar,
  Button,
  TextField,
  FontIcon
} from 'react-md'
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
  setFilter: PropTypes.func.isRequired,
  totalProducts: PropTypes.number.isRequired,
  lastSuccessfulFetch: PropTypes.instanceOf(Date)
}

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { list: true, search: '' }
    this.showList = this.showList.bind(this)
    this.showGrid = this.showGrid.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    const {
      fetchProducts,
      filter,
      setFilter,
      match,
      lastSuccessfulFetch
    } = this.props
    const now = new Date()

    if (!lastSuccessfulFetch) {
      fetchProducts()
    } else if ((now - lastSuccessfulFetch) / 1000 > 300) {
      fetchProducts()
    }

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

  handleSearch(value) {
    this.setState({ search: value })
  }

  render() {
    const {
      fetching,
      products,
      error,
      dismissError,
      totalProducts
    } = this.props
    const { list, search } = this.state

    const matchingProducts = !search
      ? products
      : products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase())
      })

    const toasts = error ? [{ text: error }] : []


    const hiddenProducts = totalProducts - matchingProducts.length
    const metaText = matchingProducts.length !== totalProducts
      ? <p>
        Showing: <strong>{matchingProducts.length}</strong> products - Hidden
        <strong> {hiddenProducts}</strong>
      </p>
      : <p>Showing: <strong>{products.length}</strong> products</p>
    return (
      <section className='products'>
        <div className='products__toolbar'>
          <div className ='products__toolbar__mode'>
            <Button onClick={this.showList} icon>list</Button>
            <Button onClick={this.showGrid} icon>view_module</Button>
          </div>
          <TextField
            id='product-search-bar'
            placeholder='Search'
            rightIcon={<FontIcon>search</FontIcon>}
            className='products__toolbar__search'
            value={search}
            onChange={this.handleSearch}
          />
        </div>
        <div className = 'products__meta'>
          {metaText}
        </div>
        {fetching
          ? <div className='wait-container'>
            <CircularProgress id='products-loading' />
          </div>
          : list
            ? <ProductList products={matchingProducts} />
            : <ProductGrid products={matchingProducts} />
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
