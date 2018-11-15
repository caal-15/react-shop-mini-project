import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './scss/index.sass'

import BasicLayout from './components/basicLayout'
import ProductSection from './components/productSection'
import ContactForm from './components/contactForm'
import Home from './components/home'

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
          render={(props) =>  <BasicLayout {...props} component={Home} />}
        />
        <Route
          exact
          path='/contact'
          render={
            (props) =>  {
              return (
                <BasicLayout fullHeight {...props} component={ContactForm} />
              )
            }
          }
        />
      </div>
    </BrowserRouter>
  )
}

export default App
