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
    const title = document.querySelector("title").textContent;
    if (isAPetition(title)) {
      alert("Remember to print 2 copies.");
    }
    window.print();
  };
}

function isAPetition(title) {
  const firstWord = title.toLowerCase().split(" ")[0];

  return firstWord == "petition";
}
