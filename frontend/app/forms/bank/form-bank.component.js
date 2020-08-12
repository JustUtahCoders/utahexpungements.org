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
import DistrictCourtCoverSheet_Pdf from "../district-court-cover-sheet/district-court-cover-sheet.pdf.component.js";
import DistrictCourtCoverSheet_Web from "../district-court-cover-sheet/district-court-cover-sheet.web.component.js";

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
import PetitionForExpungementFromBci_Web from "../order-on-petition-for-expungement-from-bci/order-on-petition-for-expungement-from-bci.web.component";
import PetitionForExpungementFromBci_Pdf from "../order-on-petition-for-expungement-from-bci/order-on-petition-for-expungement-from-bci.pdf.component";
import ApplicationForPardon_Web from "../application-for-pardon/application-for-pardon.web.component.js";
import ApplicationForPardon_Pdf from "../application-for-pardon/application-for-pardon.pdf.component.js";
import ApplicationForBoardOfPardonExpungement_Web from "../application-for-board-of-pardon-e/application-for-board-of-pardon-e.web.component.js";
import ApplicationForBoardOfPardonExpungement_Pdf from "../application-for-board-of-pardon-e/application-for-board-of-pardon-e.pdf.component.js";

import ConsentAndWaiverOfHearing_Web from "../consent-and-waiver-of-hearing/consent-and-waiver-of-hearing.web.component.js";
import ConsentAndWaiverOfHearing_Pdf from "../consent-and-waiver-of-hearing/consent-and-waiver-of-hearing.pdf.component.js";
import OrderOnMotionForReductionOfConviction_Web from "../order-on-motion-for-reduction-of-conviction/order-on-motion-for-reduction-of-conviction.web.component";
import OrderOnMotionForReductionOfConviction_Pdf from "../order-on-motion-for-reduction-of-conviction/order-on-motion-for-reduction-of-conviction.pdf.component";
import MotionToReduceConviction_Web from "../motion-to-reduce-conviction/motion-to-reduce-conviction.web.component";
import MotionToReduceConviction_Pdf from "../motion-to-reduce-conviction/motion-to-reduce-conviction.pdf.component";

import ProofOfCompletedService_Web from "../proof-of-completed-service/proof-of-completed-service.web.component.js";
import ProofOfCompletedService_Pdf from "../proof-of-completed-service/proof-of-completed-service.pdf.component.js";
import SpecialBci_Web from "../special-bci/special-bci.web.component";
import SpecialBci_Pdf from "../special-bci/special-bci.pdf.component";
import OrderOnPetitionToExpungeRecords_Web from "../order-on-petition-to-expunge-records/order-on-petition-to-expunge-records.web.component";
import OrderOnPetitionToExpungeRecords_Pdf from "../order-on-petition-to-expunge-records/order-on-petition-to-expunge-records.pdf.component";

import JusticeCourtCoverSheet_Web from "../justice-court-cover-sheet/justice-court-cover-sheet.web.component";
import JusticeCourtCoverSheet_Pdf from "../justice-court-cover-sheet/justice-court-cover-sheet.pdf.component";

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
              name={__("motion to waive fees")}
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
          path={this.props.match.url + "/application-for-board-of-pardon-e"}
          render={props => (
            <GovernmentForm
              name="Application for Board of Pardon Expungement"
              WebForm={ApplicationForBoardOfPardonExpungement_Web}
              PdfForm={ApplicationForBoardOfPardonExpungement_Pdf}
            />
          )}
        />
        <Route
          path={this.props.match.url + "/application-for-pardon"}
          render={() => (
            <GovernmentForm
              name="Application For Pardon"
              WebForm={ApplicationForPardon_Web}
              PdfForm={ApplicationForPardon_Pdf}
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
          path={this.props.match.url + "/district-court-cover-sheet"}
          render={props => (
            <GovernmentForm
              name={__("district court cover sheet")}
              WebForm={DistrictCourtCoverSheet_Web}
              PdfForm={DistrictCourtCoverSheet_Pdf}
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
          path={`${this.props.match.url}/proof-of-completed-service`}
          render={props => (
            <GovernmentForm
              name="Proof of Completed Service"
              WebForm={ProofOfCompletedService_Web}
              PdfForm={ProofOfCompletedService_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/petition-for-expungement-from-bci`}
          render={props => (
            <GovernmentForm
              name="Order on Petition for Expungement (Special Certificate from BCI)"
              WebForm={PetitionForExpungementFromBci_Web}
              PdfForm={PetitionForExpungementFromBci_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/consent-and-waiver-of-hearing`}
          render={props => (
            <GovernmentForm
              name="Consent and Waiver of Hearing"
              WebForm={ConsentAndWaiverOfHearing_Web}
              PdfForm={ConsentAndWaiverOfHearing_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/order-on-motion-for-reduction-of-conviction`}
          render={props => (
            <GovernmentForm
              name="Order on Motion for Reduction of Conviction"
              WebForm={OrderOnMotionForReductionOfConviction_Web}
              PdfForm={OrderOnMotionForReductionOfConviction_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/motion-to-reduce-conviction`}
          render={props => (
            <GovernmentForm
              name="Motion to Reduce Conviction"
              WebForm={MotionToReduceConviction_Web}
              PdfForm={MotionToReduceConviction_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/special-bci`}
          render={props => (
            <GovernmentForm
              name="Petition to Expunge Records (Special Certificate from BCI)"
              WebForm={SpecialBci_Web}
              PdfForm={SpecialBci_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/order-on-petition-to-expunge-records`}
          render={props => (
            <GovernmentForm
              name="Order on Petition to Expunge Records (Dismissal or Acquittal)"
              WebForm={OrderOnPetitionToExpungeRecords_Web}
              PdfForm={OrderOnPetitionToExpungeRecords_Pdf}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/justice-court-cover-sheet`}
          render={props => (
            <GovernmentForm
              name="Justice Court Cover Sheet"
              WebForm={JusticeCourtCoverSheet_Web}
              PdfForm={JusticeCourtCoverSheet_Pdf}
            />
          )}
        />
      </>
    );
  }
}
