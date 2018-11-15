import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './scss/index.sass'

import BasicLayout from './components/basicLayout'
import ProductSection from './components/productSection'
import ConnectedContactForm from './containers/connectedContactForm'
import Home from './components/home'
import Clients from './components/clients'

const App = () => {
  return (
    <BrowserRouter>
      <div className='full-height'>
        <Route
          exact
          path='/'
          render={(props) =>  <BasicLayout {...props} component={Home} />}
        />
        <Route
          path='/products/:filter'
          children={
            (props) => {
              const { location } = props
              const primaryRoute = location.pathname.split('/')[1]
              if (primaryRoute === 'products') {
                return (
                  <BasicLayout
                    {...props}
                    component={ProductSection}
                  />
                )
              } else {
                return null
              }
            }
          }
        />
        <Route
          exact
          path='/clients'
          render={(props) =>  <BasicLayout {...props} component={Clients} />}
        />
        <Route
          exact
          path='/contact'
          render={
            (props) =>  {
              return (
                <BasicLayout
                  fullHeight {...props}
                  component={ConnectedContactForm}
                />
              )
            }
          }
        />
      </div>
    </BrowserRouter>
  )
}

export default App
