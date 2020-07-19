import React from "react";
import { DataContainerContext } from "../data-container.component.js";
import { verifyPercentage, atLeastOneKey } from "./position.helpers.js";

export default class PositionedString extends React.Component {
  static propTypes = {
    dataKey: atLeastOneKey,
    debugKey: atLeastOneKey,
    left: verifyPercentage,
    top: verifyPercentage
  };
  static defaultProps = {
    style: {}
  };
  render() {
    return (
      <DataContainerContext.Consumer>
        {dataContainerContext => (
          <div
            data-key={this.props.dataKey}
            data-debug-key={this.props.debugKey}
            style={{
              left: this.props.left,
              top: this.props.top,
              position: "absolute",
              fontSize: this.props.fontSize,
              ...this.props.style
            }}
          >
            {this.props.children ||
              dataContainerContext.renderData(this.props.dataKey)}
          </div>
        )}
      </DataContainerContext.Consumer>
    );
  }
}
