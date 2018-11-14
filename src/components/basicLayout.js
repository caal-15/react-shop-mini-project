import React from 'react'

import Header from './header'

const BasicLayout = ({ component, location }) => {
  return (
    <div>
      <Header location={location} />
      <main className='main'>
        {component}
      </main>
    </div>
  )
}

export default BasicLayout
