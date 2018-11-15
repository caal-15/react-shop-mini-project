import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchProducts, dismissError, setFilter } from '../actions/products'
import Products from '../components/products'

const getFilteredProducts = (products, filter) => {
  if (!filter) { return products }
  return products.filter(product => {
    for (let category of product.categories) {
      if (category.toLowerCase() === filter) return true
    }
    return false
  })
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: fetchProducts(dispatch),
  dismissError: dismissError(dispatch),
  setFilter: setFilter(dispatch)
})

const mapStateToProps = state => ({
  products: getFilteredProducts(state.products.list, state.products.filter),
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
