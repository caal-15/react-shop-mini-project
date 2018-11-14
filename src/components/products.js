import React, { Component } from 'react'
import { CircularProgress, Snackbar, Button } from 'react-md'

import ProductList from './productList'
import ProductGrid from './productGrid'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { list: true }
    this.showList = this.showList.bind(this)
    this.showGrid = this.showGrid.bind(this)
  }

  componentDidMount() {
    const { fetchProducts } = this.props
    fetchProducts()
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

export default Products
