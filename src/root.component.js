import React from 'react'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import LazyRoute from './lazy-route.component.js'
import Navbar from './navbar/navbar.component.js'
import styleguide from './styleguide.js'
import {Scoped} from 'kremling'

export default class Root extends React.Component {
  render() {
    return (
      <Scoped css={styleguide}>
        <div>
          <BrowserRouter>
            <>
              <Route children={props => <Navbar {...props} />} />
              <LazyRoute exact path="/" loadRoute={() => import(/* webpackChunkName: "home" */'./home/home.component.js')} />
              <LazyRoute path="/app" loadRoute={() => import(/* webpackChunkName: "app" */'./app/app.component.js')} />
            </>
          </BrowserRouter>
        </div>
      </Scoped>
    )
  }
}
