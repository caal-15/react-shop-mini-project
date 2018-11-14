import definitions from '../definitions/products'

const initialState = {
  products: [],
  filter: null
}

const products = (state=initialState, action) => {
  if (action.type ===  definitions.FETCH_PRODUCTS) {
    return { products: action.products, filter: state.filter }
  } else if (action.type === definitions.SET_FILTER) {
    return { products: state.products, filter: action.filter }
  }
  return state
}

export default products
