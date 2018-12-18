import axios from 'axios'

import definitions from '../definitions/products'
import serverConf from '../config/server'

export const fetchProducts = (dispatch) => {
  return () => {
    dispatch({ type: definitions.SET_FETCHING, fetching: true })
    axios
      .get(serverConf.url + '/products')
      .then(res => {
        dispatch({ type: definitions.FETCH_PRODUCTS, products: res.data })
      })
      .catch(err => {
        dispatch({
          type: definitions.SET_ERROR,
          error: 'There was an error fetching the products.'
        })
        console.log(err)
      })
      .then(() => {
        dispatch({ type: definitions.SET_FETCHING, fetching: false })
      })
  }
}

export const dismissError = (dispatch) => {
  return () => {
    dispatch({ type: definitions.SET_ERROR, error: null })
  }
}

export const setFilter = (dispatch) => {
  return (filter) => {
    dispatch({ type: definitions.SET_FILTER, filter: filter })
  }
}
