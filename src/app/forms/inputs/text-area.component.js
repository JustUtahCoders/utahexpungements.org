import React from "react";
import { Scoped } from "kremling";
import { get } from "lodash";
import { govtWebFormVerticalRhythm } from "src/styleguide.js";

export default class TextArea extends React.Component {
  state = {
    value: get(this.props.data, this.props.dataKey)
  };

  componentDidUpdate(prevProps) {
    // Update for context changes
    const prevContextValue = get(prevProps.data, prevProps.dataKey);
    const newContextValue = get(this.props.data, this.props.dataKey);
    if (prevContextValue !== newContextValue) {
      this.setState({
        value: newContextValue
      });
    }
  }
  handleTextAreaChange = evt => {
    console.log(evt.target.value.length);
    if (evt.target.value.length > 460) {
      this.setState({ showFormBanner: true });
    } else {
      this.setState({ showFormBanner: false });
    }
    this.setState({ value: evt.target.value });
  };
  render() {
    return (
      <Scoped css={css}>
        {this.state.showFormBanner ? (
          <div className="formBanner">Form character limit reached</div>
        ) : null}
        <div className="web-form-input text-input">
          <label>{this.props.label}</label>
          <textarea
            type="text"
            value={this.state.value || ""}
            onInput={this.handleTextAreaChange}
            onBlur={this.handleBlur}
          />
        </div>
      </Scoped>
    );
  }
  handleBlur = () => {
    this.props.setData(this.props.dataKey, this.state.value);
  };
}

const css = `
  & .formBanner {
    margin: auto;
    width: 85%;
    height: 40px;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    text-align: center;
    line-height: 40px;
  }

  & .text-input {
    display: flex;
    flex-direction: column;
  }
`;
