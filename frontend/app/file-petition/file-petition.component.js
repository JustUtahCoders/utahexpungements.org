import React from "react";
import { Route } from "react-router-dom";
import PetitionOverview from "./petition-overview.component";
import PetitionNavigator from "./petition-navigator.component.js";
import GovernmentForm from "../forms/government-form.component.js";
import PetitionForConviction_Web from "../forms/petition-for-conviction/petition-for-conviction.web.component.js";
import PetitionForConviction_Pdf from "../forms/petition-for-conviction/petition-for-conviction.pdf.component.js";

export default class FilePetition extends React.Component {
  render() {
    return (
      <>
        <h1>File Petition</h1>
        <>
          <Route
            path={this.props.match.url}
            exact
            component={PetitionOverview}
          />
          <Route
            path={this.props.match.url + "/petition-navigator"}
            component={PetitionNavigator}
          />
          <Route
            path={this.props.match.url + "/petition-for-conviction"}
            render={props => (
              <GovernmentForm
                name={__("petition conviction name")}
                WebForm={PetitionForConviction_Web}
                PdfForm={PetitionForConviction_Pdf}
              />
            )}
          />
        </>
      </>
    );
  }
}
