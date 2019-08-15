import React from "react";
import { Scoped } from "kremling";
import DefinedTerm from "../defined-term.component.js";

export default function DispositionDefn(props) {
  return (
    <Scoped css={css}>
      <div className="vertical-margin-8">
        A disposition is what was decided about a <DefinedTerm term="charge" />{" "}
        in a <DefinedTerm term="court case" />. You'll see a disposition for
        each court charge in your criminal history printout, which tells you
        what the outcome was.
      </div>
      <div className="vertical-margin-8">
        Here are some of the possible dispositions for a{" "}
        <DefinedTerm term="charge" />:
        <ul className="with-bullets">
          <li>
            <span>{__("def - disposition")[0]}:</span>{" "}
            {__("def - disposition")[1]}
          </li>
          <li>
            <span>{__("def - disposition")[2]}:</span>{" "}
            {__("def - disposition")[3]}
          </li>
          <li>
            <span>{__("def - disposition")[4]}:</span>{" "}
            {__("def - disposition")[5]}
          </li>
          <li>
            <span>{__("def - disposition")[6]}:</span>{" "}
            {__("def - disposition")[7]}
          </li>
          <li>
            <span>{__("def - disposition")[8]}:</span>{" "}
            {__("def - disposition")[9]}
          </li>
        </ul>
      </div>
    </Scoped>
  );
}

const css = `
  & .with-bullets > li > span {
    font-weight: bold;
  }
`;
