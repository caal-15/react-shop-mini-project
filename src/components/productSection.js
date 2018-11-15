import React from 'react'

import FilteredProducts from '../containers/filteredProducts'
import CategoryBar from './categoryBar'

const ProductSection = ({ match }) => {
  return(
    <div className='product-section'>
      <CategoryBar match={match} />
      <FilteredProducts />
    </div>
  )
}

export default ProductSection
