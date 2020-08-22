import React from "react";
import { useCss } from "kremling";
import { get } from "lodash";
import { DataContainerContext } from "../data-container.component";

export default function TextArea(props) {
  const dataContext = React.useContext(DataContainerContext);
  const scope = useCss(css);
  const [value, setValue] = React.useState(
    get(dataContext.data, props.dataKey, "")
  );
  const [showFormBanner, setShowFormBanner] = React.useState(false);

  React.useEffect(() => {
    if (value.length > 460) {
      setShowFormBanner(true);
    } else {
      setShowFormBanner(false);
    }
  }, [value, showFormBanner]);

  React.useEffect(() => {
    setValue(get(dataContext.data, props.dataKey, ""));
  }, [dataContext, props.dataKey]);

  return (
    <div {...scope}>
      {showFormBanner ? (
        <div className="formBanner">Form character limit reached</div>
      ) : null}
      <div className="web-form-input text-input">
        <label>{props.label}</label>
        <textarea
          className="text-area"
          type="text"
          value={value || ""}
          onChange={handleTextAreaChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );

  function handleTextAreaChange(evt) {
    setValue(evt.target.value);
  }

  function handleBlur() {
    dataContext.setData(props.dataKey, value);
  }
}

const css = `
  & .formBanner {
    margin: auto;
    width: 85%;
    height: 40px;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    text-align: center;
    line-height: 40px;
  }

  & .text-input {
    display: flex;
    flex-direction: column;
  }

  & .text-area {
    height: 7em;
  }
`;
