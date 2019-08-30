import React from "react";
import DefinedTerm from "../defined-term.component.js";

export default function ExpungementDefn(props) {
  return (
    <div className="vertical-margin-8">
      {__("def - expungement")[0]}
      <DefinedTerm term="conviction">{__("def - expungement")[1]}</DefinedTerm>
      {__("def - expungement")[2]}
      <DefinedTerm term="charge">{__("def - expungement")[3]}</DefinedTerm>
      {__("def - expungement")[4]}
    </div>
  );
}
