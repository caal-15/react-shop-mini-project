import React from 'react'
import { render } from 'react-dom'
import WebFontLoader from 'webfontloader'

import App from './app'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  }
})

render(
  <App />,
  document.getElementById('react-app')
)
