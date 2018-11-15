import React from 'react'
import { Grid, Cell, Card, CardText, CardTitle } from 'react-md'
import PropTypes from 'prop-types'

import productPropType from '../proptypes/product'

const propTypes = {
  products: PropTypes.arrayOf(productPropType).isRequired
}

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map(product => {
        const subtitle = `${product.categories.join(', ')} - ${product.brand}`
        return (
          <Cell key={product.id} size={6} align={'stretch'}>
            <Card className='products__grid__card'>
              <CardTitle title={product.name} subtitle={subtitle} />
              <div className='products__grid__card__info'>
                <div className='products__grid__card__img__wrapper'>
                  <img
                    className='products__grid__card__img'
                    src='https://picsum.photos/640/480/?random'
                    alt={`${product.name} image`}
                  />
                </div>
                <div className='products__grid__card__text__wrapper'>
                  <CardText className='products__list__card__text'>
                    <p>{product.description}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                  </CardText>
                </div>
              </div>
            </Card>
          </Cell>
        )
      })}
    </Grid>
  )
}

ProductGrid.propTypes = propTypes

export default ProductGrid
