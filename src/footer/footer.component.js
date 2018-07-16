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
                Home
              </li>
            </Link>
            <Link to='/app/expungements-overview'>
              <li>
                What is an expungement?
              </li>
            </Link>
            <a href="https://utahexpungements.freeflarum.com" target="_blank">
              <li>
                Ask a question
              </li>
            </a>
          </ul>
          <ul className="links">
            <Link to='/about-us'>
              <li>
                About us
              </li>
            </Link>
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
    justify-content: center;
    padding: 48rem 0rem;
  }

  & .links {
    padding: 0 16rem;
  }

  & .links a:hover {
    text-decoration: underline;
  }

  & .links li {
    padding: 4rem 0;
  }
`
