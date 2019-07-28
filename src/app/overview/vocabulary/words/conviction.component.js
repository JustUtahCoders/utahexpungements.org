import React from "react";
import { Link } from "react-router-dom";
import DefinedTerm from "../defined-term.component.js";

export default function ConvictionDefn(props) {
  return (
    <>
      <div className="vertical-margin-8">
        A conviction declares you guilty of a <DefinedTerm term="charge" />.
        This happens when you admit to a crime by pleading guilty or when a
        judge/jury finds you guilty in court. Convictions are part of your
        criminal record and show up in background checks, which is why it's
        important to get an <DefinedTerm term="expungement" /> for them.
      </div>
      <div className="vertical-margin-8">
        You can get a list of your convictions by{" "}
        <a
          target="_blank"
          rel="noopener"
          href="https://bci.utah.gov/criminal-records/"
        >
          getting a printout
        </a>{" "}
        from the <DefinedTerm term="bci" />. Go to our{" "}
        <Link to="/app/tool">expungement tool</Link> for more information on how
        to do this.
      </div>
    </>
  );
}
