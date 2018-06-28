import React from 'react'
import {Scoped} from 'kremling'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="navbar bg-primary">
          <div />
          <ul className="menu-items">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/app">
                Expungement tool
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </Scoped>
    )
  }
}

const css = `
  & .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & .menu-items {
    display: flex;
    list-style-type: none;
  }

  & .menu-items > li {
    padding-right: 16px;
  }

  & .menu-items > li a {
    color: white;
  }
`
