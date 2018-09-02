import React from 'react'
import {Scoped} from 'kremling'
import {lightGray} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class FillableForm extends React.Component {
  rootEl = React.createRef()
  state = {
    showDetails: false,
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="fillable-form" onClick={this.openDetails} aria-label={__("click for form details")} tabIndex={0} role="button" onKeyPress={this.openDetails} ref={this.rootEl}>
          <div className="details">
            <div>
              <h4 className="name">
                {this.props.name}
              </h4>
              <div>
                {this.props.shortDescription}
                <div className="raw-form">
                  <a href={this.props.downloadUrl} target="_blank">
                    Download raw form
                  </a>
                </div>
              </div>
            </div>
            <div className="links">
              <Link to={this.props.appUrl}>
                <button className="primary">
                  Fill out form
                </button>
              </Link>
            </div>
          </div>
          <div className="summary">
            <img className="preview-thumbnail" src={this.props.previewUrls[0]} />
            <div className="name">
              {this.props.name}
            </div>
          </div>
        </div>
      </Scoped>
    )
  }
  componentWillUnmount() {
    if (this.state.showDetails) {
      document.removeEventListener('click', this.closeDetails)
    }
  }
  openDetails = (evt) => {
    if (!evt.key || evt.key === 'Enter' || evt.key === 'Space') {
      document.addEventListener('click', this.closeDetails)
      this.setState({showDetails: true})
    }
  }
  closeDetails = evt => {
    if (!evt || !this.rootEl.current.contains(evt.target)) {
      document.removeEventListener('click', this.closeDetails)
      this.setState({showDetails: false})
    }
  }
}

const css = `
  & .fillable-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 182rem;
    min-height: 285rem;
    max-height: 285rem;
    background-color: ${lightGray};
    padding: 6rem;
    border-radius: 3rem;
    margin-right: 32rem;
    margin-bottom: 32rem;
  }

  & .fillable-form:hover {
    opacity: .8;
  }

  & .preview-thumbnail {
    /* 8.5 x 11 aspect ratio */
    width: 170rem;
    min-width: 170rem;
    height: 200rem;
    min-height: 200rem;
  }

  & .name {
    text-align: center;
    padding: 8rem;
    margin: 0;
  }

  & .fillable-form:hover .summary, & .fillable-form:focus .summary {
    display: none;
  }

  & .fillable-form:hover .details, & .fillable-form:focus .details {
    display: flex;
  }

  & .details {
    visibility: none;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 273rem;
    padding-bottom: 12rem;
    text-align: center;
  }

  & .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .raw-form {
    margin: 8rem 0;
  }
`
