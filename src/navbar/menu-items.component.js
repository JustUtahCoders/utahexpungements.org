import {auth} from '../firebase'
import AuthUserContext from '../auth-user.component.js'
import React from 'react'
import {Scoped, a, t} from 'kremling'
import {darkPrimary, navbarHeight, secondary, boxShadow3, darkSecondary, mediaMobile, mediaDesktop} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class MenuItems extends React.Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser =>
          <Scoped css={css}>
            <nav className={a("side-menu").m('off-screen', !this.props.visible)}>
              <ul className={a("menu-items")}>
                {this.authSection(authUser)}
                {authUser && this.createLink('/app/dashboard', 'Dashboard')}
                {this.createLink('/', 'Home')}
                {this.createExternalLink('https://utahexpungements.freeflarum.com/', 'Ask a question')}
                {this.createExternalLink('https://utahexpungements.freeflarum.com/', 'Community forum')}
                {this.createLink('/about-us', 'About us')}
                {this.createLink('/app', 'Expungement tool')}
                {this.subItem('/app/expungements-overview', 'Overview')}
                {this.subItem('/app/are-you-eligible', 'Step 1: Are you eligible?')}
                {this.subItem('/app/certificate-of-eligibility', 'Step 2: Certificate of Eligibility')}
                {this.subItem('/app/file-petition', 'Step 3: File Petition')}
                {this.subItem('/app/serve-petition', 'Step 4: Serve Petition')}
              </ul>
            </nav>
          </Scoped>
        }
      </AuthUserContext.Consumer>
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
  authSection = authUser => {
    return (
      <div className="auth-section">
        {authUser ? (
          <div>
            Welcome {authUser.email}.{' '}
            <a href="" onClick={this.logout}>Logout</a>
          </div>
        ) : (
          <div>
            <Link to="/app/login">
              Login
            </Link>
            {' '}or{' '}
            <Link to="/app/sign-up">
              Sign up
            </Link>
          </div>
        )}
      </div>
    )
  }
  logout = () => {
    auth.doSignOut()
  }
  subItem = (url, text) => {
    return (
      <Link to={url} className="menu-item sub-item">
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
