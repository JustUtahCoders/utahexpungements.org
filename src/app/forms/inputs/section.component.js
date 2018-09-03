import React from 'react'
import {Scoped} from 'kremling'
import {darkGray, lightGray} from 'src/styleguide.js'

export default class Section extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="section">
          <div className="section-header">
            {this.props.name}
          </div>
          {this.props.children}
        </div>
      </Scoped>
    )
  }
}

const css = `
  & .section-header {
    color: ${darkGray};
    width: calc(100% + 32rem);
    border-bottom: 1rem solid ${lightGray};
    font-size: 18rem;
    line-height: 28rem;
    margin: 24rem 0 16rem 0;
  }
`
