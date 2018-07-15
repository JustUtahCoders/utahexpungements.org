import React from 'react'
import {Scoped, a, t} from 'kremling'
import {darkPrimary, navbarHeight, secondary, boxShadow3, darkSecondary, mediaMobile, mediaDesktop} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class MenuItems extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <nav className={a("side-menu").m('off-screen', !this.props.visible)}>
          <ul className={a("menu-items")}>
            {this.createLink('/', 'Home')}
            {this.createLink('/app', 'Expungement tool')}
            {this.createExternalLink('https://utahexpungements.freeflarum.com/', 'Ask a question')}
            {this.createExternalLink('https://utahexpungements.freeflarum.com/', 'Community forum')}
            {this.createLink('/about-us', 'About us')}
          </ul>
        </nav>
      </Scoped>
    )
  }
  createLink = (url, text) => {
    return (
      <Link to={url} className="menu-item">
        <li>
          {text}
        </li>
      </Link>
    )
  }
  createExternalLink = (url, text) => {
    return (
      <a href={url} className="menu-item" target="_blank">
        <li>
          {text}
        </li>
      </a>
    )
  }
}

const css = `
  & .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 18rem;
  }

  & .menu-items {
    min-width: 250rem;
  }

  & .menu-item {
    display: flex;
    padding: 16rem;
    height: 100%;
    width: 100%;
  }

  & .menu-item:hover {
    background-color: ${secondary};
  }

  & .side-menu {
    position: fixed;
    top: ${navbarHeight};
    background-color: white;
    box-shadow: ${boxShadow3};
    height: calc(100% - ${navbarHeight});
    z-index: 10000;
    left: 0;
    transition: left 0.3s;
  }

  & .side-menu.off-screen {
    left: -250rem;
  }
`
