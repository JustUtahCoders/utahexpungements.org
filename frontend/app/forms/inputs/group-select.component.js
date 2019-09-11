import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function GroupSelect(props) {
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
        <option value="nothingSelected">Please select an option.</option>
        {props.groupOptions.map(groupOption => (
          <optgroup key={groupOption.name} label={groupOption.name}>
            {groupOption.options.map(option => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

const css = `
        & .select-label {
            margin-bottom: 8rem
        }
`;
