import React from "react";
import { DataContainerContext } from "../forms/data-container.component.js";
import { Scoped } from "kremling";
import { darkGray, lightGray } from "frontend/styleguide.js";

export default class GovernmentForm extends React.Component {
  state = {
    originalPageTitle: document.querySelector("title").textContent
  };
  componentDidMount() {
    document.querySelector("title").textContent = this.props.name;
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="header">
          <div className="expungement-form">Expungement Form:</div>
          <div>{this.props.name}</div>
        </div>
        <DataContainerContext.Consumer>
          {dataProps => (
            <>
              <this.props.WebForm {...dataProps} />
              <this.props.PdfForm {...dataProps} />
            </>
          )}
        </DataContainerContext.Consumer>
      </Scoped>
    );
  }
  componentWillUnmount() {
    document.querySelector("title").textContent = this.state.originalPageTitle;
  }
}

const css = `
  & .header {
    font-size: 2rem;
    margin: -32px 0 0 -32px;
    padding: 12px 0 12px 12px;
    border-bottom: 1px solid ${lightGray};
    width: calc(100% + 64px);
  }

  & .expungement-form {
    color: ${darkGray};
    font-size: 1.5rem;
  }

  & .form-name {
    font-size: 2rem;
  }
`;
