import {auth} from '../firebase'
import AppContext from '../app-context.component.js'
import React from 'react'
import {Scoped, a, t} from 'kremling'
import {darkPrimary, navbarHeight, secondary, boxShadow3, darkSecondary, mediaMobile, mediaDesktop} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class MenuItems extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <Scoped css={css}>
            <nav className={a("side-menu").m('off-screen', !this.props.visible)}>
              <ul className={a("menu-items")}>
                {context.authUser && this.createLink('/app/dashboard', 'menu item - dashboard')}
                {this.createLink('/', 'menu item - home')}
                {this.createExternalLink('https://utahexpungements.freeflarum.com/', 'menu item - ask a question')}
                {this.createLink('/app/forms', 'menu item - forms')}
                {this.createLink('/app', 'menu item - tool')}
                {this.subItem('/app/expungements-overview', 'menu item - overview')}
                {this.subItem('/app/are-you-eligible', 'menu item - step 1')}
                {this.subItem('/app/certificate-of-eligibility', 'menu item - step 2')}
                {this.subItem('/app/file-petition', 'menu item - step 3')}
                {this.subItem('/app/serve-petition', 'menu item - step 4')}
                {this.createLink('/about', 'menu item - about')}
              </ul>
            </nav>
          </Scoped>
        }
      </AppContext.Consumer>
    )
  }
  createLink = (url, stringId) => {
    return (
      <Link to={url} className="menu-item">
        <li>
          {__(stringId)}
        </li>
      </Link>
    )
  }
  createExternalLink = (url, stringId) => {
    return (
      <a href={url} className="menu-item" target="_blank">
        <li>
          {__(stringId)}
        </li>
      </a>
    )
  }
  subItem = (url, stringId) => {
    return (
      <Link to={url} className="menu-item sub-item">
        <li>
          {__(stringId)}
        </li>
      </Link>
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
    min-width: 275rem;
    max-width: 275rem;
  }

  & .auth-section {
    padding: 16rem;
    font-size: 13rem;
  }

  & .menu-item {
    display: flex;
    padding: 16rem;
    height: 100%;
    width: 100%;
    text-decoration: none;
  }

  & .menu-item:hover {
    background-color: ${secondary};
  }

  & .sub-item {
    padding-left: 32rem;
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
    left: -275rem;
  }
`
