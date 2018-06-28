import React from 'react'
import {Scoped, a, t} from 'kremling'
import {darkPrimary, mediaMobile, mediaDesktop} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class MenuItems extends React.Component {
  static defaultProps = {
    color: '#fff',
  }
  render() {
    return (
      <Scoped css={css}>
        <ul className={a("menu-items").t("horizontal", "vertical", this.props.orientation === 'horizontal')}>
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          <Link to="/app">
            <li>
              Expungement tool
            </li>
          </Link>
          <Link to="/contact-us">
            <li>
              Contact Us
            </li>
          </Link>
        </ul>
      </Scoped>
    )
  }
}

const css = `
  & .menu-items {
    display: flex;
    align-items: center;
    height: 100%;
  }

  ${mediaMobile} {
    & .menu-items.horizontal {
      display: none !important;
    }

    & .menu-items.vertical > a {
      width: 100%;
      padding: 8rem 16rem;
    }
  }

  & .menu-items.vertical {
    flex-direction: column;
    font-size: 24rem;
  }

  & .menu-items.horizontal > a {
    align-items: center;
  }

  & .menu-items > a {
    display: flex;
    padding: 0 12rem 0 12rem;
    height: 100%;
    color: white;
  }

  & .menu-items.vertical > a {
    flex-direction: column;
  }

  & .menu-items > a:hover {
    background-color: ${darkPrimary};
    height: 100%;
  }
`
