import React from "react";
import { Scoped } from "kremling";
import { darkGray, lightGray } from "frontend/styleguide.js";

export default class Section extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="section">
          <div className="section-header">{this.props.name}</div>
          {this.props.children}
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .section-header {
    color: ${darkGray};
    width: calc(100% + 3.2rem);
    border-bottom: 0.1rem solid ${lightGray};
    font-size: 1.8rem;
    line-height: 2.8rem;
    margin: 2.4rem 0 1.6rem 0;
  }
`;
