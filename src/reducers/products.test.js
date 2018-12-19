import productReducer from './products'
import productDefs from '../definitions/products'

describe('When th reducer is called', () => {

  const initialState = {
    list: [],
    filter: null,
    fetching: false,
    error: null,
    lastSuccessfulFetch: null
  }

  it('Returns the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState)
  })

  it('Updates the products', () => {
    const action = {
      type: productDefs.FETCH_PRODUCTS,
      products: [
        {
          id: 'MaId',
          name: 'DaProduct',
          brand: 'DaSupaBrand',
          categories: ['DaCat', 'DaOtherCat'],
          description: 'A really good one',
          photo: 'DaPhoto',
          price: '10900',
          stock: 100
        }
      ]
    }
    const { filter, fetching, error } = initialState
    const expected = {
      filter,
      fetching,
      error,
      list: action.products
    }
    const results = productReducer(initialState, action)
    const resultObj = {
      filter: results.filter,
      fetching: results.fetching,
      error: results.error,
      list: results.list
    }
    expect(resultObj).toEqual(expected)
    expect(results.lastSuccessfulFetch).toBeTruthy()
  })
})
