import React from "react";
import { Route } from "react-router-dom";
import { Scoped, a, m } from "kremling";
import {
  navbarHeight,
  tertiary,
  breadcrumbHeight
} from "frontend/styleguide.js";
import Breadcrumb from "./breadcrumb.component.js";
import ScreeningToolCrumb from "./screening-tool/screening-tool-crumb.component.js";
import CertificateOfEligibilityCrumb from "./certificate-of-eligibility/certificate-of-eligibility-crumb.component.js";
import FilePetitionCrumb from "./file-petition/file-petition-crumb.component.js";
import ServePetitionCrumb from "./serve-petition/serve-petition-crumb.component.js";
import BasicsCrumb from "./overview/overview-basics-crumb.component.js";
import VocabularyCrumb from "./overview/vocabulary/vocabulary-crumb.component.js";

export default function Breadcrumbs(props) {
  return (
    <Scoped css={css}>
      <nav className="breadcrumbs">
        <Route
          path="/app/tool"
          render={routeProps => (
            <Breadcrumb
              isFirst={true}
              name={__("menu item - tool")}
              url="/app/tool"
              childCrumbs={
                <>
                  <ScreeningToolCrumb {...props} />
                  <CertificateOfEligibilityCrumb {...props} />
                  <FilePetitionCrumb {...props} />
                  <ServePetitionCrumb {...props} />
                </>
              }
            />
          )}
        />
        <Route
          path="/app/overview"
          render={routeProps => (
            <Breadcrumb
              isFirst={true}
              name={__("menu item - overview")}
              url="/app/overview"
              childCrumbs={
                <>
                  <BasicsCrumb {...routeProps} />
                  <VocabularyCrumb {...routeProps} />
                </>
              }
            />
          )}
        />
      </nav>
    </Scoped>
  );
}

const css = `
  & .breadcrumbs {
    position: fixed;
    top: ${navbarHeight};
    left: 0;
    width: 100vw;
    background-color: ${tertiary};
    height: ${breadcrumbHeight};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 16px;
  }
`;
