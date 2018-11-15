import PropTypes from 'prop-types'

const productPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired
})

export default productPropType
