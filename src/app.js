import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './scss/index.sass'

import BasicLayout from './components/basicLayout'
import FilteredProducts from './containers/filteredProducts'
import Home from './components/home'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route
          exact
          path='/'
          render={(props) =>  <BasicLayout {...props} component={<Home />} />}
        />
        <Route
          exact
          path='/products'
          render={
            (props) => {
              return (
                <BasicLayout {...props} component={<FilteredProducts />} />
              )
            }
          }
        />
        <Route
          exact
          path='/products/:filter'
          render={(props) =>  <BasicLayout {...props} component={<Home />} />}
        />
        <Route
          exact
          path='/clients'
          render={(props) =>  <BasicLayout {...props} component={<Home />} />}
        />
        <Route
          exact
          path='/contact'
          render={(props) =>  <BasicLayout {...props} component={<Home />} />}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
