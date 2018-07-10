import React from 'react'
import {Scoped} from 'kremling'
import {Link} from 'react-router-dom'

export default class NavigationMenu extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="card">
          <ul>
            <li>
              <Link to={this.props.match.url + '/overview'}>
                Expungements Overview
              </Link>
            </li>
            <li>
              <Link to={this.props.match.url + '/are-you-eligible'}>
                Are you eligible?
              </Link>
            </li>
            <li>
              <Link to={this.props.match.url + '/certificate-of-eligibility'}>
                Step 1: Certificate of eligibility
              </Link>
            </li>
            <li>
              <Link to={this.props.match.url + '/file-petition'}>
                Step 2: File petition to expunge record
              </Link>
            </li>
            <li>
              <Link to={this.props.match.url + '/serve-petition'}>
                Step 3: Serve the petition to prosecutor
              </Link>
            </li>
          </ul>
        </div>
      </Scoped>
    )
  }
}

const css = `
`
