import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import { Route, Link, Switch, withRouter } from 'react-router-dom'

import Home from './Home'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Bottom = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
`

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
  }
  html,
  body,
  #root {
    height: 100%;
    position: relative;
  }
`

function Site() {
  return (
    <Container>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      </ul>
      <Bottom>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/animated" component={Home} />
        </Switch>
      </Bottom>
    </Container>
  )
}

export default withRouter(Site)
