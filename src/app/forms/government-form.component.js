import React from "react";
import { DataContainerContext } from "../forms/data-container.component.js";
import { Scoped } from "kremling";
import { darkGray, lightGray } from "src/styleguide.js";

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
    font-size: 32rem;
    margin: -32rem 0 0 -32rem;
    padding: 12rem 0 12rem 12rem;
    border-bottom: 1rem solid ${lightGray};
    width: calc(100% + 64rem);
  }

  & .expungement-form {
    color: ${darkGray};
    font-size: 24rem;
  }

  & .form-name {
    font-size: 32rem;
  }
`;
