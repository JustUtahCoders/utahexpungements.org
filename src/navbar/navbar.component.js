import React from 'react'
import {Scoped} from 'kremling'
import Hamburger from './hamburger.component.js';
import MenuItems from './menu-items.component.js'

export default class Navbar extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <nav className="navbar bg-primary">
          <Hamburger />
          <MenuItems orientation="horizontal" />
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
    justify-content: flex-start;
    align-items: center;
  }
`
