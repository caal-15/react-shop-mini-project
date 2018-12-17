import { createSelector } from 'reselect'

const getProducts = state => state.products.list
const getFilter = state => state.products.filter

const filteredProductsSelector = (products, filter) => {
  if (!filter) { return products }
  return products.filter(product => {
    for (let category of product.categories) {
      if (category.toLowerCase() === filter) return true
    }
    return false
  })
}

export const getFilteredProducts = createSelector([getProducts, getFilter], filteredProductsSelector)
