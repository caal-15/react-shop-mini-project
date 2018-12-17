import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchProducts, dismissError, setFilter } from '../actions/products'
import Products from '../components/products'
import { getFilteredProducts } from '../selectors/products'

const mapDispatchToProps = dispatch => ({
  fetchProducts: fetchProducts(dispatch),
  dismissError: dismissError(dispatch),
  setFilter: setFilter(dispatch)
})

const mapStateToProps = state => ({
  products: getFilteredProducts(state),
  fetching: state.products.fetching,
  error: state.products.error,
  filter: state.products.filter,
  totalProducts: state.products.list.length,
  lastSuccessfulFetch: state.products.lastSuccessfulFetch
})

const ConnectedProducts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)

export default withRouter(ConnectedProducts)
