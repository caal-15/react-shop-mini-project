import React from 'react'

import FilteredProducts from '../containers/filteredProducts'
import CategoryBar from './categoryBar'

const ProductSection = () => {
  return(
    <div className='product-section'>
      <CategoryBar />
      <FilteredProducts />
    </div>
  )
}

export default ProductSection
