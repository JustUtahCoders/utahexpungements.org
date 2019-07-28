import React from "react";
import { Route } from "react-router-dom";
import CertificateOfEligibility from "../certificate-of-eligibility/certificate-of-eligibility.component.js";
import FilePetition from "../file-petition/file-petition.component.js";
import ServePetition from "../serve-petition/serve-petition.component.js";
import ScreeningTool from "../screening-tool/screening-tool.component.js";

export default function ExpungementsTool(props) {
  return (
    <>
      <Route
        path={props.match.url + "/are-you-eligible"}
        component={ScreeningTool}
      />
      <Route
        path={props.match.url + "/certificate-of-eligibility"}
        component={CertificateOfEligibility}
      />
      <Route
        path={props.match.url + "/file-petition"}
        component={FilePetition}
      />
      <Route
        path={props.match.url + "/serve-petition"}
        component={ServePetition}
      />
    </>
  );
}
