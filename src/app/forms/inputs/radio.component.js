import React, { useEffect } from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Radio(props) {
  const [value, setValue] = React.useState(get(props.data, props.dataKey));
  const scope = useCss(css);
  const dataContext = React.useContext(DataContainerContext);

  useEffect(() => {
    dataContext.setData(props.dataKey, value);
  }, [value]);

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
            onChange={evt => setValue(evt.target.value)}
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
