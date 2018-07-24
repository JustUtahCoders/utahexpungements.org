import React from 'react'
import {Scoped} from 'kremling'
import {secondary} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="footer">
          <ul className="links">
            <Link to='/'>
              <li>
                {__("home page")}
              </li>
            </Link>
            <Link to='/app/expungements-overview'>
              <li>
                {__("what is expg")}
              </li>
            </Link>
            <a href="https://utahexpungements.freeflarum.com" target="_blank">
              <li>
                {__("ask a question")}
              </li>
            </a>
          </ul>
          <ul className="links">
            <Link to='/about-us'>
              <li>
                {__("about us")}
              </li>
            </Link>
            <a href="https://utahexpungements.freeflarum.com" target="_blank">
              <li>
                {__("community forum")}
              </li>
            </a>
            <Link to="/contribute">
              <li>
                {__("report problem")}
              </li>
            </Link>
          </ul>
        </div>
      </Scoped>
    )
  }
}

const css = `
  & .footer {
    background-color: ${secondary};
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 48rem 0rem;
  }

  & .links {
    padding: 0 16rem;
  }

  & .links a {
    text-decoration: none;
  }

  & .links a:hover {
    text-decoration: underline;
  }

  & .links li {
    padding: 4rem 0;
  }
`
