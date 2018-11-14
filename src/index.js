import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import WebFontLoader from 'webfontloader'

import App from './app'
import reducer from './reducers'

const store = createStore(reducer)

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app')
)
