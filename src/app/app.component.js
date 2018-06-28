import React from 'react'
import {Scoped} from 'kremling'

export default class App extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="app navbar-margin-top">
          <h1>App!</h1>
        </div>
      </Scoped>
    )
  }
}

export const css = `
  & .app {
    margin-left: auto;
    margin-right: auto;
    width: 65%;
  }
`
