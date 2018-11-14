import superagent from 'superagent'

import definitions from '../definitions/products'
import serverConf from '../config/server'

export const fetchProducts = (dispatch) => {
  return () => {
    superagent
      .get(serverConf.url + '/products')
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          dispatch({ type: definitions.FETCH_PRODUCTS, products: res.body })
        }
      })
  }
}
