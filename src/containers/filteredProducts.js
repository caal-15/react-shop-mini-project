import { connect } from 'react-redux'

import { fetchProducts, dismissError } from '../actions/products'
import ProductList from '../components/productList'

const mapDispatchToProps = dispatch => ({
  fetchProducts: fetchProducts(dispatch),
  dismissError: dismissError(dispatch)
})

const mapStateToProps = state => ({
  products: state.products.list,
  fetching: state.products.fetching,
  error: state.products.error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)
