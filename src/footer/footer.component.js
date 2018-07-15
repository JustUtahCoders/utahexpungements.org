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
            <Link to='/about-us'>
              <li>
                About us
              </li>
            </Link>
            <a href="https://utahexpungements.freeflarum.com" target="_blank">
              <li>
                Ask a question
              </li>
            </a>
          </ul>
          <ul className="links">
            <a href="https://utahexpungements.freeflarum.com" target="_blank">
              <li>
                Community Forum
              </li>
            </a>
            <Link to="/contribute">
              <li>
                Report a problem
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
    justify-content: space-around;
    padding: 48rem 160rem;
  }

  & .links a:hover {
    text-decoration: underline;
  }

  & .links li {
    padding: 4rem 0;
  }
`
