import React from 'react'
import { Card, CardTitle, CardText } from 'react-md'

const ProductList = ({ products }) => {
  return (
    <ul className='products__list'>
      {products.map(product => {
        const subtitle = `${product.categories.join(', ')} - ${product.brand}`
        return (
          <Card
            key={product.id}
            className='md-block-centered products__list__card'
          >
            <CardTitle title={product.name} subtitle={subtitle} />
            <div className='products__list__card__info'>
              <div className='products__list__card__img__wrapper'>
                <img
                  className='products__list__card__img'
                  src='https://picsum.photos/640/480/?random'
                  alt={`${product.name} image`}
                />
              </div>
              <div className='products__list__card__text__wrapper'>
                <CardText className='products__list__card__text'>
                  <p>{product.description}</p>
                  <p><strong>Stock:</strong> {product.stock}</p>
                  <p><strong>Price:</strong> ${product.price}</p>
                </CardText>
              </div>
            </div>
          </Card>
        )
      })}
    </ul>
  )
}

export default ProductList
