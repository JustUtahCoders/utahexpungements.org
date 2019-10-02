import React from "react";
import { useCss } from "kremling";
import { DataContainerContext } from "../data-container.component";

export default function TextInputGroup(props) {
  const dataContext = React.useContext(DataContainerContext);
  var inputs = Object.assign({}, ...props.inputs);
  const [inputList, setInputList] = React.useState([inputs]);
  const scope = useCss(css);

  return (
    <div className="web-form-input" onBlur={evt => handleBlur(evt)} {...scope}>
      <label>{props.groupLabel}</label>
      <div>
        {inputList.map((input, idx) => (
          <React.Fragment key={`${input}-${idx}`}>
            {Object.entries(input).map(([key, val]) => (
              <div key={`${key}-${idx}`} className="web-form-input text-input">
                <label>{key}</label>
                <input
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

  function handleChange(evt, key, idx) {
    const values = [...inputList];
    values[idx][key] = evt.target.value;
    setInputList(values);
  }
  function handleAddGroup(evt) {
    evt.preventDefault();
    const values = [...inputList];
    values.push(inputs);
    setInputList(values);
  }
  function handleRemoveGroup(evt, i) {
    evt.preventDefault();
    const values = [...inputList];
    values.splice(i, 1);
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
		flex-direction:column
	}

	
`;
