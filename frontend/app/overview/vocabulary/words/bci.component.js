import React from "react";
import { Scoped } from "kremling";

export default function BCIDefn(props) {
  return (
    <Scoped css={css}>
      <div className="vertical-margin-8">
        {__("def - bci")[0]}
        <ol>
          <li>
            <a
              href="https://bci.utah.gov/criminal-records/"
              target="_blank"
              rel="noopener"
            >
              {__("def - bci")[1]}
            </a>
            {__("def - bci")[2]}
          </li>
          <li>
            <a
              href="https://bci.utah.gov/expungements/"
              target="_blank"
              rel="noopener"
            >
              {__("def - bci")[3]}
            </a>
            {__("def - bci")[4]}
          </li>
        </ol>
        <div className="contact-information">{__("def - bci")[5]}</div>
        <div>
          <a target="_blank" rel="noopener" href="https://bci.utah.gov/">
            https://bci.utah.gov/
          </a>
        </div>
        <div>Utah Bureau of Criminal Identification</div>
        <div>3888 West 5400 South</div>
        <div>Taylorsville, UT 84129</div>
        <div>(801) 965-4445</div>
        <div>{__("def - bci")[6]}</div>
      </div>
    </Scoped>
  );
}

const css = `
  & .contact-information {
    font-style: italic;
    margin-bottom: 4px;
  }
`;
