import React from "react";
import ReactDOM from "react-dom";
import { Scoped } from "kremling";

export default class RenderPage extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Scoped css={css}>
        <div className="form-page">
          <img src={this.props.url} alt="print-form" />
          {this.props.children}
        </div>
      </Scoped>,
      document.getElementById("print-element")
    );
  }
}

const css = `
  @media print {
    & .form-page {
      /* not quite 11in because chrome causes an extra page when you do that */
      width: 8.5in;
      height: 11in;
    }
  }

  & img {
    left: 0;
    top: 0;
    width: 100%;
    height: 99%;
  }

  & .form-page {
    position: relative;
  }
`;
