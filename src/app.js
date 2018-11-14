import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './scss/index.sass'

import Home from './components/home'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Home} />
        <Route exact path='/products/:filter' component={Home} />
        <Route exact path='/products/clients' component={Home} />
        <Route exact path='/contact' component={Home} />
      </div>
    </BrowserRouter>
  )
}

export default App
