import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Checkbox(props) {
  const [value, setValue] = React.useState(
    get(props.data, props.dataKey, false)
  );
  const scope = useCss(css);
  const dataContext = React.useContext(DataContainerContext);

  return (
    <div className="web-form-input" {...scope}>
      <label>
        <input
          type="checkbox"
          checked={value}
          onChange={evt => setValue(evt.target.checked)}
          onBlur={handleBlur}
        />
        {props.label}
      </label>
    </div>
  );

  function handleBlur() {
    dataContext.setData(props.dataKey, value);
  }
}

const css = `
  & .checkbox {
    margin-left: 32rem;
  }
`;
