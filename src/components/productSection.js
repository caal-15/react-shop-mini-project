import React from 'react'
import { match as matchPropType } from 'react-router-prop-types'

import FilteredProducts from '../containers/filteredProducts'
import CategoryBar from './categoryBar'

const propTypes = {
  match: matchPropType
}

const ProductSection = ({ match }) => {
  return(
    <div className='product-section'>
      <CategoryBar match={match} />
      <FilteredProducts />
    </div>
  )
}

ProductSection.propTypes = propTypes

export default ProductSection
