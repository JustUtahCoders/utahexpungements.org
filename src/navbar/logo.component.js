import React from 'react'
import {Scoped} from 'kremling'
import {Link} from 'react-router-dom'

export default class Logo extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <Link to="/" className="logo no-underline">
          <div className="logo-text">
            utahexpungements.org
          </div>
        </Link>
      </Scoped>
    )
  }
}

const css = `
  & .logo-text {
    color: white;
    font-weight: bold;
  }

  & .logo {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
