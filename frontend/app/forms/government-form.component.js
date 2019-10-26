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
    font-size: 3.2rem;
    margin: -3.2rem 0 0 -3.2rem;
    padding: 1.2rem 0 1.2rem 1.2rem;
    border-bottom: 0.1rem solid ${lightGray};
    width: calc(100% + 6.4rem);
  }

  & .expungement-form {
    color: ${darkGray};
    font-size: 2.4rem;
  }

  & .form-name {
    font-size: 3.2rem;
  }
`;
