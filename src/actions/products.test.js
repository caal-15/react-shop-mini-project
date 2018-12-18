import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import serverConf from '../config/server'
import { fetchProducts } from '../actions/products'

const flushAllPromises = () => new Promise(resolve => setImmediate(resolve))

describe('When Fetching Products', () => {

  let store
  let httpMock

  beforeEach(() => {
    httpMock = new MockAdapter(axios)
    const mockStore = configureMockStore()
    store = mockStore({})
  })

  it('Handles success correctly', async () => {
    const expected = [
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
    httpMock.onGet(serverConf.url + '/products').reply(200, expected)

    fetchProducts(store.dispatch)()

    await flushAllPromises()

    expect(store.getActions()).toEqual([
      { type: 'SET_FETCHING', fetching: true },
      { type: 'FETCH_PRODUCTS', products: expected },
      { type: 'SET_FETCHING', fetching: false }
    ])
  })

  it('Handles Failure Correctly', async () => {
    httpMock.onGet(serverConf.url + '/products').reply(500)

    fetchProducts(store.dispatch)()

    await flushAllPromises()

    expect(store.getActions()).toEqual([
      { type: 'SET_FETCHING', fetching: true },
      {
        type: 'SET_ERROR',
        error: 'There was an error fetching the products.'
      },
      { type: 'SET_FETCHING', fetching: false }
    ])
  })
})
