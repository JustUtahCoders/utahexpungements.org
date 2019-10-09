import React from "react";
import { useCss } from "kremling";
import { DataContainerContext } from "../data-container.component";

export default function TextInputGroup(props) {
  const dataContext = React.useContext(DataContainerContext);
  var inputs = props.inputs.reduce(
    (acc, value) => ({ ...acc, [value]: "" }),
    {}
  );
  const [inputList, setInputList] = React.useState([inputs]);
  const scope = useCss(css);
  console.log(inputList);
  return (
    <div className="web-form-input" onBlur={evt => handleBlur(evt)} {...scope}>
      <label>{props.groupLabel}</label>
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
      <button className="web-form-input" onClick={evt => handleAddGroup(evt)}>
        Add {props.buttonLabel}
      </button>
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
    const values = [...inputList, inputs];
    setInputList(values);
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
`;
