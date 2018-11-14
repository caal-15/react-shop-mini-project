import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'


class ProductList extends Component {
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
    console.log(toasts)
    return (
      <section className='product-list'>
        {fetching
          ? <div className='wait-container'>
            <CircularProgress id='products-loading' />
          </div>
          : <h1>Products: {products.length}</h1>
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

export default ProductList
