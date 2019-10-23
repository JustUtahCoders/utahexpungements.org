import React from "react";
import { Scoped } from "kremling";
import { mediaMobile } from "frontend/styleguide.js";

export default class DetailHighlight extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="detail-highlight">
          <img className="icon" src={this.props.icon} />
          <div className="text">
            <h3>{this.props.title}</h3>
            <div>{this.props.description}</div>
          </div>
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .icon {
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
  }

  & .detail-highlight {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 16px 40px;
  }

  & .text {
    max-width: 200px;
  }
`;
