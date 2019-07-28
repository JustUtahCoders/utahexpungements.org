import React from "react";
import DefinedTerm from "../defined-term.component.js";

export default function ChargeDefn(props) {
  return (
    <>
      <div className="vertical-margin-8">
        {__("def - charge")[0]}A charge is when you are accused of a crime. It
        is very common for there to be multiple charges as part of a single{" "}
        <DefinedTerm term="court case" />. When there are multiple charges in a
        case, only the most severe charge factors into your expungement
        eligibility.
      </div>
      <div className="vertical-margin-8">
        There are at least two types of charges:
        <ul className="with-bullets">
          <li>
            <span className="bold">Arrest charge:</span> When you are arrested
            or apprehended by the police, they must charge you with a crime.
            They can later change or drop the charges, but they specify what law
            you violated when they arrest you. Arrest charges are recorded and
            can show up in background checks, but usually it's the court charges
            and convictions that are more important.
          </li>
          <li>
            <span className="bold">Court charge:</span> Shortly after you are
            arrested, you will be charged in court for one or more crimes. These
            ones are important to get expunged, since they show up in background
            checks. For some crimes, this may happen all without you going to
            court, but the court charges will still be on your record.
          </li>
        </ul>
      </div>
    </>
  );
}
