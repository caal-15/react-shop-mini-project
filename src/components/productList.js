import React, { Component } from 'react'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchProducts } = this.props
    fetchProducts()
  }

  render() {
    console.log(this.props)
    return (
      <h1>Products</h1>
    )
  }
}

export default ProductList
