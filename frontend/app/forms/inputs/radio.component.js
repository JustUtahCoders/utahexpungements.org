import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Radio(props) {
  const dataContext = React.useContext(DataContainerContext);
  const value = get(dataContext.data, props.dataKey);
  const scope = useCss(css);

  return (
    <div className="web-form-input" {...scope}>
      <div className="radio">{props.label}</div>
      {props.options.map(option => (
        <label key={option.value}>
          {option.label}
          <input
            type="radio"
            name={option.label}
            value={option.value}
            checked={value == option.value}
            onChange={evt =>
              dataContext.setData(props.dataKey, evt.target.value)
            }
          />
        </label>
      ))}
    </div>
  );
}

const css = `
    & .radio {
        margin-bottom:8rem;
    }
`;
