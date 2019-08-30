import React from "react";
import { Route } from "react-router-dom";
import Breadcrumb from "frontend/app/breadcrumb.component.js";

export default function VocabularyCrumb(props) {
  const vocabularyUrl = props.match.url + "/vocabulary";
  return (
    <Route
      path={vocabularyUrl}
      render={routeProps => (
        <Breadcrumb name={__("vocabulary")} url={vocabularyUrl} />
      )}
    />
  );
}
