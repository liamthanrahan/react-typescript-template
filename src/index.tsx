import 'react-hot-loader/patch'

import React from 'react'
import getRoot from 'get-root'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import Hello from './components/Hello.tsx'

const doRender = Component => {
  render(
    <Router>
      <AppContainer>
        <Component compiler="TypeScript" framework="React" />
      </AppContainer>
    </Router>,
    getRoot()
  )
}

doRender(Hello)

if (module.hot) {
  module.hot.accept('./components/Hello', () => {
    const next = require('./components/Hello')
    doRender(next.default)
  })
}
