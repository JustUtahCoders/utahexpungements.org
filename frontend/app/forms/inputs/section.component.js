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
    width: calc(100% + 32px);
    border-bottom: 1px solid ${lightGray};
    font-size: 1.125rem;
    line-height: 28px;
    margin: 24px 0 16px 0;
  }
`;
