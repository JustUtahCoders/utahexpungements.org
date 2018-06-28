import React from 'react'
import {Scoped, a, t} from 'kremling'
import {darkPrimary, darkSecondary, mediaMobile, mediaDesktop} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class MenuItems extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <ul className={a("menu-items").t("horizontal", "vertical", this.props.orientation === 'horizontal').m('secondary', this.props.secondaryColor)}>
          {this.createLink('/', 'Home')}
          {this.createLink('/app', 'Expungement tool')}
          {this.createLink('/contact-us', 'Contact Us')}
        </ul>
      </Scoped>
    )
  }
  createLink = (url, text) => {
    return (
      <Link to={url}>
        <li>
          {text}
        </li>
      </Link>
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
    color: #fff;
  }

  & .menu-items.vertical > a {
    flex-direction: column;
  }

  & .menu-items > a:hover {
    background-color: ${darkPrimary};
    height: 100%;
  }

  & .menu-items.secondary > a:hover {
    background-color: ${darkSecondary};
  }
`
