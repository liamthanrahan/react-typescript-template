import 'react-hot-loader/patch'

import React, { FunctionComponent } from 'react'
import getRoot from 'get-root'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import Hello, { HelloProps } from './components/Hello'

const doRender = (Component: FunctionComponent<HelloProps>): void => {
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
