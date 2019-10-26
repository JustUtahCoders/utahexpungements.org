import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function Checkbox(props) {
  const dataContext = React.useContext(DataContainerContext);
  const value = get(dataContext.data, props.dataKey, false);
  const scope = useCss(css);

  return (
    <div className="web-form-input" {...scope}>
      <label>
        <input
          name={props.name}
          type="checkbox"
          checked={value}
          onChange={evt =>
            dataContext.setData(props.dataKey, evt.target.checked)
          }
        />
        {props.label}
      </label>
    </div>
  );
}

const css = `
  & .checkbox {
    margin-left: 3.2rem;
  }
`;
