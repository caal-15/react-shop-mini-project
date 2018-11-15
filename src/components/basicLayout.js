import React from 'react'

import Header from './header'

const BasicLayout = (props) => {
  const { component, ...rest } =props
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

export default BasicLayout
