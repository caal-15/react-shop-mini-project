import definitions from '../definitions/products'

const initialState = {
  list: [],
  filter: null,
  fetching: false,
  error: null
}

const products = (state=initialState, action) => {
  if (action.type ===  definitions.FETCH_PRODUCTS) {
    return {
      list: action.products,
      filter: state.filter,
      fetching: state.fetching,
      error: state.error
    }
  } else if (action.type === definitions.SET_FILTER) {
    return {
      list: state.list,
      filter: action.filter,
      fetching: state.fetching,
      error: state.error
    }
  } else if (action.type === definitions.SET_FETCHING) {
    return {
      list: state.list,
      filter: state.filter,
      fetching: action.fetching,
      error: state.error
    }
  } else if (action.type === definitions.SET_ERROR) {
    return {
      list: state.list,
      filter: state.filter,
      fetching: state.fetching,
      error: action.error
    }
  }
  return state
}

export default products
