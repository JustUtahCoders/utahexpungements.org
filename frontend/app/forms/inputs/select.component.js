import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Select(props) {
  const dataContext = React.useContext(DataContainerContext);
  const value = get(dataContext.data, props.dataKey);
  const scope = useCss(css);

  return (
    <div className="web-form-input" {...scope}>
      <div className="select-label">{props.label}</div>
      <select
        value={value}
        onChange={evt => dataContext.setData(props.dataKey, evt.target.value)}
      >
        <option value="nothingSelected">Please select an option</option>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const css = `
  & .select-label {
    margin-bottom: 8rem;
  }
`;
