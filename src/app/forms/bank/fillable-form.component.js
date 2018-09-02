import React from 'react'
import {Scoped} from 'kremling'
import {lightGray} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class FillableForm extends React.Component {
  state = {
    showDetails: false,
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="fillable-form" onClick={this.openDetails} aria-label={__("click for form details")} tabIndex={0} role="button" onKeyPress={this.openDetails}>
          {this.state.showDetails
            ?
              <div className="details">
                <div>
                  <h4 className="name">
                    {this.props.name}
                  </h4>
                  <div>
                    {this.props.shortDescription}
                  </div>
                </div>
                <div>
                  <Link className="no-underline" to={this.props.appUrl}>
                    Fill out form
                  </Link>
                  <Link className="no-underline" to={this.props.downloadUrl}>
                    Download raw form
                  </Link>
                </div>
              </div>
            :
              <>
                <img className="preview-thumbnail" src={this.props.previewUrls[0]} />
                <div className="name">
                  {this.props.name}
                </div>
              </>
          }
        </div>
      </Scoped>
    )
  }
  openDetails = (evt) => {
    if (!evt.key || evt.key === 'Enter' || evt.key === 'Space') {
      this.setState({showDetails: true})
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
    cursor: pointer;
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

  & .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`
