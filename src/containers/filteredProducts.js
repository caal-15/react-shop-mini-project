import { connect } from 'react-redux'

import { fetchProducts } from '../actions/products'
import ProductList from '../components/productList'

const mapDispatchToProps = dispatch => ({
  fetchProducts: fetchProducts(dispatch)
})

const mapStateToProps = state => ({
  products: state.products.list
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)
