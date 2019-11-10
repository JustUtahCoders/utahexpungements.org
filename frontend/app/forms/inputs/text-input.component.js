import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function TextInput(props) {
  const dataContext = React.useContext(DataContainerContext);
  const [value, setValue] = React.useState(
    get(dataContext.data, props.dataKey)
  );
  const scope = useCss(css);

  React.useEffect(() => {
    setValue(get(dataContext.data, props.dataKey));
  }, [dataContext, props.dataKey]);

  return (
    <div className="web-form-input text-input" {...scope}>
      <label>{props.label}</label>
      <input
        type="text"
        value={value || ""}
        placeholder={props.placeholder}
        onChange={evt => setValue(evt.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );

  function handleBlur(evt) {
    dataContext.setData(props.dataKey, value);
  }
}

const css = `
  & .text-input {
    display: flex;
    flex-direction: column;
  }
`;
