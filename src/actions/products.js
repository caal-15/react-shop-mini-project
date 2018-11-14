import superagent from 'superagent'

import definitions from '../definitions/products'
import serverConf from '../config/server'

export const fetchProducts = (dispatch) => {
  return () => {
    dispatch({ type: definitions.SET_FETCHING, fetching: true })
    superagent
      .get(serverConf.url + '/products')
      .end((err, res) => {
        dispatch({ type: definitions.SET_FETCHING, fetching: false })
        if (err) {
          dispatch({
            type: definitions.SET_ERROR,
            error: 'There was an error fetching the products.'
          })
          console.log(err)
        } else {
          dispatch({ type: definitions.FETCH_PRODUCTS, products: res.body })
        }
      })
  }
}

export const dismissError = (dispatch) => {
  return () => {
    dispatch({ type: definitions.SET_ERROR, error: null })
  }
}
