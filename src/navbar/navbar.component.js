import React from 'react'
import {Scoped} from 'kremling'
import Hamburger from './hamburger.component.js';
import MenuItems from './menu-items.component.js'
import Logo from './logo.component.js'

export default class Navbar extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <nav className="navbar bg-primary">
          <Hamburger />
          <Logo />
        </nav>
      </Scoped>
    )
  }
}

const css = `
  & .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
    z-index: 1000;
  }
`
