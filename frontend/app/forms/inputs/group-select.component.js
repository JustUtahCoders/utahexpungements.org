import React from "react";
import { useCss } from "kremling";
import { get, sortBy } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function GroupSelect({ dataKey, label, groupOptions }) {
  const dataContext = React.useContext(DataContainerContext);
  let value = get(dataContext.data, dataKey);
  if (
    !groupOptions.find(({ options }) =>
      options.find(opt => opt.value === value)
    )
  ) {
    value = "DEFAULT";
  }
  const scope = useCss(css);

  return (
    <div className="web-form-input" {...scope}>
      <div className="select-label">{label}</div>
      <select
        onChange={evt => dataContext.setData(dataKey, evt.target.value)}
        value={value}
      >
        <option disabled value="DEFAULT">
          Please select an option.
        </option>
        {sortBy(groupOptions, ({ name }) => name).map(groupOption => (
          <optgroup key={groupOption.name} label={groupOption.name}>
            {sortBy(groupOption.options, ({ label }) => label).map(option => (
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
            margin-bottom: 8px;
        }
`;
