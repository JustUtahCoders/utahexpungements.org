import React from "react";
import { useCss } from "kremling";
import { DataContainerContext } from "../data-container.component";

export default function TextInputGroup(props) {
  const dataContext = React.useContext(DataContainerContext);

  const [inputList, setInputList] = React.useState([
    props.inputs.reduce((acc, value) => ({ ...acc, [value]: "" }), {})
  ]);
  const [showFormBanner, setShowFormBanner] = React.useState(false);

  const scope = useCss(css);

  React.useEffect(() => {
    if (inputList.length >= props.maxInputs) {
      setShowFormBanner(true);
    } else {
      setShowFormBanner(false);
    }
  }, [inputList.length, showFormBanner]);

  return (
    <div className="web-form-input" onBlur={evt => handleBlur(evt)} {...scope}>
      <label>
        <h2>{props.groupLabel}</h2>
      </label>
      <div>
        {inputList.map((input, idx) => (
          <React.Fragment key={`${input}-${idx}`}>
            {Object.entries(input).map(([key, val]) => (
              <div key={`${key}-${idx}`} className="web-form-input text-input">
                <label htmlFor={`${idx}-${key}`}>{formatLabel(key)}</label>
                <input
                  id={`${idx}-${key}`}
                  type="text"
                  value={input[key]}
                  onChange={evt => handleChange(evt, key, idx)}
                />
              </div>
            ))}

            {inputList.length > 1 && (
              <button
                className="web-form-input"
                onClick={evt => handleRemoveGroup(evt, idx)}
              >
                Remove {props.buttonLabel}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
      {showFormBanner && <div className="formBanner">Max Reached</div>}
      {!showFormBanner && (
        <button className="web-form-input" onClick={evt => handleAddGroup(evt)}>
          Add {props.buttonLabel}
        </button>
      )}
    </div>
  );

  function formatLabel(label) {
    label = label.split(/(?=[A-Z])/).join(" ");
    return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
  }

  function handleChange(evt, key, idx) {
    const values = [...inputList];
    values[idx][key] = evt.target.value;
    setInputList(values);
  }
  function handleAddGroup(evt) {
    evt.preventDefault();
    if (!showFormBanner) {
      const values = [
        ...inputList,
        props.inputs.reduce((acc, value) => ({ ...acc, [value]: "" }), {})
      ];
      setInputList(values);
    } else {
      const values = [...inputList];
      setInputList(values);
    }
  }
  function handleRemoveGroup(evt, i) {
    evt.preventDefault();
    const values = inputList.filter((item, idx) => idx !== i);
    dataContext.setData(props.dataKey, values);
    setInputList(values);
  }
  function handleBlur(e) {
    e.preventDefault();
    dataContext.setData(props.dataKey, inputList);
  }
}

const css = `
  & .text-input {
    display:flex;
    flex-direction:column;
  }
  & .formBanner {
    margin: 10px auto;
    width: 85%;
    height: 40px;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    text-align: center;
    line-height: 40px;
  }
`;
