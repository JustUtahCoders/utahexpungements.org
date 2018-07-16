import React from 'react'
import {Scoped} from 'kremling'
import {Link} from 'react-router-dom'

export default class Breadcrumb extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        {!this.props.isFirst &&
          <div className="caret">></div>
        }
        <Link to={this.props.url}>
          {this.props.name}
        </Link>
        {this.props.childCrumbs}
      </Scoped>
    )
  }
}

const css = `
  & .caret {
    margin: 0 8rem;
  }
`
