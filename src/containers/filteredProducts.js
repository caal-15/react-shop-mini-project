import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchProducts, dismissError } from '../actions/products'
import Products from '../components/products'

const mapDispatchToProps = dispatch => ({
  fetchProducts: fetchProducts(dispatch),
  dismissError: dismissError(dispatch)
})

const mapStateToProps = state => ({
  products: state.products.list,
  fetching: state.products.fetching,
  error: state.products.error
})

const ConnectedProducts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)

export default withRouter(ConnectedProducts)
