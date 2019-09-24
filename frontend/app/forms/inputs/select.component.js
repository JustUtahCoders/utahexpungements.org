import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Select(props) {
  const dataContext = React.useContext(DataContainerContext);
  let value = get(dataContext.data, props.dataKey);
  if (!props.options.find(opt => opt.value === value)) {
    value = "DEFAULT";
  }
  const scope = useCss(css);

  return (
    <div className="web-form-input" {...scope}>
      <div className="select-label">{props.label}</div>
      <select
        onChange={evt => dataContext.setData(props.dataKey, evt.target.value)}
        value={value}
      >
        <option disabled value="DEFAULT">
          Please select an option
        </option>
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
