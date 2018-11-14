import definitions from '../definitions/products'

const initialState = {
  list: [],
  filter: null
}

const products = (state=initialState, action) => {
  if (action.type ===  definitions.FETCH_PRODUCTS) {
    return { list: action.products, filter: state.filter }
  } else if (action.type === definitions.SET_FILTER) {
    return { list: state.list, filter: action.filter }
  }
  return state
}

export default products
