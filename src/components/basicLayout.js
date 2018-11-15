import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'

import Header from './header'

const propTypes = {
  component: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match,
  route: ReactRouterPropTypes.route,
}

const BasicLayout = ({ component, ...rest }) => {
  const Component = component
  return (
    <div>
      <Header {...rest} />
      <main className='main'>
        <Component {...rest} />
      </main>
    </div>
  )
}

BasicLayout.propTypes = propTypes

export default BasicLayout
