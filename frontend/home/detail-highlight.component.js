import React from "react";
import { Scoped } from "kremling";

export default class DetailHighlight extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="detail-highlight">
          <img className="icon" src={this.props.icon} alt="icon" />
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
    width: 10rem;
    height: 10rem;
    min-width: 10rem;
    min-height: 10rem;
  }

  & .detail-highlight {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 1.6rem 4rem;
  }

  & .text {
    max-width: 20rem;
  }
`;
