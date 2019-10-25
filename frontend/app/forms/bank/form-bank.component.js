import React from "react";
import { Route } from "react-router-dom";
import FormList from "./form-list.component.js";
import GovernmentForm from "../government-form.component.js";
import ApplicationForCOE_Web from "../application-for-coe/application-for-coe.web.component.js";
import ApplicationForCOE_Pdf from "../application-for-coe/application-for-coe.pdf.component.js";
import PetitionForConviction_Web from "../petition-for-conviction/petition-for-conviction.web.component.js";
import PetitionForConviction_Pdf from "../petition-for-conviction/petition-for-conviction.pdf.component.js";
import MotionToWaiveFees_Web from "../motion-to-waive-fees/motion-to-waive-fees.web.component.js";
import MotionToWaiveFees_Pdf from "../motion-to-waive-fees/motion-to-waive-fees.pdf.component.js";
import AppForCOEWithRelease_Web from "../app-for-coe-with-release/app-for-coe-with-release.web.component.js";
import AppForCOEWithRelease_Pdf from "../app-for-coe-with-release/app-for-coe-with-release.pdf.component.js";
import Coversheet_Pdf from "../coversheet/coversheet.pdf.component.js";
import Coversheet_Web from "../coversheet/coversheet.web.component.js";

import PetitionForDrugConviction_Web from "../petition-for-drug-conviction/petition-for-drug-conviction.web.component.js";
import PetitionForDrugConviction_Pdf from "../petition-for-drug-conviction/petition-for-drug-conviction.pdf.component.js";
import AcceptanceOfService_Web from "../acceptance-of-service/acceptance-of-service.web.component.js";
import AcceptanceOfService_Pdf from "../acceptance-of-service/acceptance-of-service.pdf.component.js";
import DraftCourtOrderConviction_Web from "../draft-court-order-conviction/draft-court-order-conviction.web.component";
import DraftCourtOrderConviction_Pdf from "../draft-court-order-conviction/draft-court-order-conviction.pdf.component";
import DraftCourtOrderDrugPossessionConviction_Web from "../draft-court-order-drug-possession-conviction/draft-court-order-drug-possession-conviction.web.component";
import DraftCourtOrderDrugPossessionConviction_Pdf from "../draft-court-order-drug-possession-conviction/draft-court-order-drug-possession-conviction.pdf.component";
import DraftCourtOrderMotionWaiveFees_Web from "../draft-court-order-motion-waive-fees/draft-court-order-motion-waive-fees.web.component";
import DraftCourtOrderMotionWaiveFees_Pdf from "../draft-court-order-motion-waive-fees/draft-court-order-motion-waive-fees.pdf.component";
import OrderOnPetitionChargesNotFiled_Web from "../order-on-petition-charges-not-filed/order-on-petition-charges-not-filed.web.component";
import OrderOnPetitionChargesNotFiled_Pdf from "../order-on-petition-charges-not-filed/order-on-petition-charges-not-filed.pdf.component";
import PetitionForDismissalOrAcquittal_Pdf from "../petition-for-dismissal-or-acquittal/petition-for-dismissal-or-acquittal.pdf.component.js";
import PetitionForDismissalOrAcquittal_Web from "../petition-for-dismissal-or-acquittal/petition-for-dismissal-or-acquittal.web.component.js";
import PetitionForChargesNeverFiled_Web from "../petition-for-charges-never-filed/petition-for-charges-never-filed.web.component";
import PetitionForChargesNeverFiled_Pdf from "../petition-for-charges-never-filed/petition-for-charges-never-filed.pdf.component";

import ReplyToStatement_Web from "../reply-to-statement/reply-to-statement.web.component";
import ReplyToStatement_Pdf from "../reply-to-statement/reply-to-statement.pdf.component";

import PetitionForExpungementFromBci_Web from "../petition-for-expungement-from-bci/petition-for-expungement-from-bci.web.component";
import PetitionForExpungementFromBci_Pdf from "../petition-for-expungement-from-bci/petition-for-expungement-from-bci.pdf.component";

export default class FormBank extends React.Component {
  render() {
    return (
      <>
        <Route path={this.props.match.url} exact component={FormList} />
        <Route
          path={this.props.match.url + "/adult-coe-form"}
          render={props => (
            <GovernmentForm
              name="Application for Expungement of Adult Criminal History"
              WebForm={ApplicationForCOE_Web}
              PdfForm={ApplicationForCOE_Pdf}
            />
          )}
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
        <Route
          path={this.props.match.url + "/draft-court-order-conviction"}
          render={props => (
            <GovernmentForm
              name="Court order for Expungement conviction"
              WebForm={DraftCourtOrderConviction_Web}
              PdfForm={DraftCourtOrderConviction_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/motion-to-waive-fees"}
          render={props => (
            <GovernmentForm
              name={__("motion to waive fees name")}
              WebForm={MotionToWaiveFees_Web}
              PdfForm={MotionToWaiveFees_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/application-for-coe-with-release"}
          render={props => (
            <GovernmentForm
              name={__("app for coe with release")}
              WebForm={AppForCOEWithRelease_Web}
              PdfForm={AppForCOEWithRelease_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/petition-for-drug-conviction"}
          render={props => (
            <GovernmentForm
              name={__("petition for drug conviction")}
              WebForm={PetitionForDrugConviction_Web}
              PdfForm={PetitionForDrugConviction_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/coversheet"}
          render={props => (
            <GovernmentForm
              name={__("Coversheet")}
              WebForm={Coversheet_Web}
              PdfForm={Coversheet_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/acceptance-of-service"}
          render={props => (
            <GovernmentForm
              name="Acceptance of Service"
              WebForm={AcceptanceOfService_Web}
              PdfForm={AcceptanceOfService_Pdf}
            />
          )}
        />
        <Route
          path={
            this.props.match.url +
            "/draft-court-order-drug-possession-conviction"
          }
          render={props => (
            <GovernmentForm
              name="Order on Petition to Expunge Records (Drug possession conviction)"
              WebForm={DraftCourtOrderDrugPossessionConviction_Web}
              PdfForm={DraftCourtOrderDrugPossessionConviction_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/draft-court-order-motion-waive-fees"}
          render={props => (
            <GovernmentForm
              name="Order on Motion to Waive Fees"
              WebForm={DraftCourtOrderMotionWaiveFees_Web}
              PdfForm={DraftCourtOrderMotionWaiveFees_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/petition-for-dismissal-or-acquittal"}
          render={props => (
            <GovernmentForm
              name="Petition to Expunge Records (Dismissal or Acquittal)"
              WebForm={PetitionForDismissalOrAcquittal_Web}
              PdfForm={PetitionForDismissalOrAcquittal_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/petition-for-charges-never-filed"}
          render={props => (
            <GovernmentForm
              name="Petition for Charges Never Filed"
              WebForm={PetitionForChargesNeverFiled_Web}
              PdfForm={PetitionForChargesNeverFiled_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/order-on-petition-charges-not-filed`}
          render={props => (
            <GovernmentForm
              name="Order on Petition to Expunge Records (Charges never filed)"
              WebForm={OrderOnPetitionChargesNotFiled_Web}
              PdfForm={OrderOnPetitionChargesNotFiled_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/reply-to-statement`}
          render={props => (
            <GovernmentForm
              name="Reply to statement or response"
              WebForm={ReplyToStatement_Web}
              PdfForm={ReplyToStatement_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/petition-for-expungement-from-bci`}
          render={props => (
            <GovernmentForm
              name="Petition for Expungement (Special Certificate from BCI)"
              WebForm={PetitionForExpungementFromBci_Web}
              PdfForm={PetitionForExpungementFromBci_Pdf}
            />
          )}
        />
      </>
    );
  }
}
