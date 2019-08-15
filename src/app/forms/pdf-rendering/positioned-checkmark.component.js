import React from "react";
import { getClassname } from "./data-key.helpers.js";
import { DataContainerContext } from "../data-container.component.js";
import { get } from "lodash";
import PropTypes from "prop-types";
import { verifyPercentage, atLeastOneKey } from "./position.helpers.js";

export default class PositionedCheckmark extends React.Component {
  static eitherShouldShowOrDataKey(props, propName, componentName) {
    if (
      typeof props.shouldShow !== "boolean" &&
      typeof props.dataKey !== "string"
    ) {
      return Error(
        `A ${componentName} was rendered without either a 'shouldShow' boolean prop or a 'dataKey' string prop. One of the two is required. Props passed were '${JSON.stringify(
          props
        )}'`
      );
    }
  }
  static propTypes = {
    shouldShow: PositionedCheckmark.eitherShouldShowOrDataKey,
    dataKey: PositionedCheckmark.eitherShouldShowOrDataKey,
    debugKey: atLeastOneKey,
    left: verifyPercentage,
    top: verifyPercentage
  };
  render() {
    if (
      typeof this.props.shouldShow !== "undefined" &&
      !this.props.shouldShow
    ) {
      return null;
    }

    return (
      <DataContainerContext.Consumer>
        {dataContainerContext => {
          const shouldShow =
            typeof this.props.shouldShow !== "undefined"
              ? this.props.shouldShow
              : get(dataContainerContext, `data.${this.props.dataKey}`, false);
          return (
            shouldShow && (
              <div
                data-key={this.props.dataKey}
                data-debug-key={this.props.debugKey}
                style={{
                  top: this.props.top,
                  left: this.props.left,
                  position: "absolute"
                }}
              >
                {"\u2714"}
              </div>
            )
          );
        }}
      </DataContainerContext.Consumer>
    );
  }
}
