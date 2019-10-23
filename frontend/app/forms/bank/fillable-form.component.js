import React from "react";
import { Scoped } from "kremling";
import { lightGray } from "frontend/styleguide.js";
import { Link } from "react-router-dom";

export default class FillableForm extends React.Component {
  rootEl = React.createRef();
  render() {
    return (
      <Scoped css={css}>
        <div className="fillable-form" ref={this.rootEl}>
          <div className="details">
            <div>
              <h4 className="name">{this.props.name}</h4>
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
                <button className="primary">Fill out form</button>
              </Link>
            </div>
          </div>
          <div className="summary">
            <img
              className="preview-thumbnail"
              src={this.props.previewUrls[0]}
            />
            <div className="name">{this.props.name}</div>
          </div>
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .fillable-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 182px;
    min-height: 285px;
    max-height: 285px;
    background-color: ${lightGray};
    padding: 6px;
    border-radius: 3px;
    margin-right: 32px;
    margin-bottom: 32px;
  }

  & .fillable-form:hover {
    opacity: .8;
  }

  & .preview-thumbnail {
    /* 8.5 x 11 aspect ratio */
    width: 170px;
    min-width: 170px;
    height: 200px;
    min-height: 200px;
  }

  & .name {
    text-align: center;
    padding: 8px;
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
    height: 273px;
    padding-bottom: 12px;
    text-align: center;
  }

  & .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .raw-form {
    margin: 8px 0;
  }
`;
