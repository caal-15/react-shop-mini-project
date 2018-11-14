import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'

import ProductList from './productList'

class Products extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchProducts } = this.props
    fetchProducts()
  }

  render() {
    const { fetching, products, error, dismissError } = this.props
    const toasts = error ? [{ text: error }] : []
    console.log(products)
    return (
      <section className='products'>
        {fetching
          ? <div className='wait-container'>
            <CircularProgress id='products-loading' />
          </div>
          : <ProductList products={products} />
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

export default Products
