import React from 'react'
import ReactDOM from 'react-dom'
import {Scoped} from 'kremling'

export default class RenderPage extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Scoped css={css}>
        <div className="form-page">
          <img src={this.props.url} />
          {this.props.children}
        </div>
      </Scoped>,
      document.getElementById('print-element')
    )
  }
}

const css = `
  @media print {
    & .form-page {
      width: 8.5in;
      height: 11in;
    }
  }

  & img {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & .form-page {
    position: relative;
  }

  & .form-page * {
    position: absolute;
  }
`
