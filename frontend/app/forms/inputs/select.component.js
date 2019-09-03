import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Select(props) {
  const dataContext = React.useContext(DataContainerContext);
  const [value, setValue] = React.useState(
    get(dataContext.data, props.dataKey)
  );
  const scope = useCss(css);

  return (
    <div className="web-form-input" {...scope}>
      <div className="select-label">{props.label}</div>
      <select value={value} onChange={handleChange}>
        <option value="nothingSelected">Please select an option</option>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  function handleChange(evt) {
    const value = evt.target.value;
    setValue(value);
    dataContext.setData(props.dataKey, value);
  }
}

const css = `
  & .select-label {
    margin-bottom: 8rem;
  }
`;
