import React from "react";

export default class FormThatPrints extends React.Component {
  static defaultProps = {
    submitText: "Print Form"
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
        <button
          className="primary"
          type="submit"
          style={{ marginTop: "1.6rem" }}
        >
          {this.props.submitText}
        </button>
      </form>
    );
  }
  handleSubmit = evt => {
    evt.preventDefault();
    window.print();
  };
}
