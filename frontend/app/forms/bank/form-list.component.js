import React from "react";
import { Scoped } from "kremling";
import FilteredForms from "./filtered-forms.component.js";
import FillableForm from "./fillable-form.component.js";

export default class FormList extends React.Component {
  state = {
    searchValue: "",
    showIncompleteForms:
      localStorage.getItem("show-incomplete-forms") === "true"
  };
  render() {
    return (
      <Scoped css={css}>
        <h1>Form bank</h1>
        <div>
          <p>
            Welcome to the Form Bank! Here are all of the forms that you can
            fill out with utahexpungements.org.
          </p>
          <p>
            Once you fill out one form, all relevant data from that form flows
            to all the other forms you fill out, so that you don't have to type
            in the same info more than once.
          </p>
        </div>
        <input
          autoFocus
          type="text"
          value={this.state.searchValue}
          onChange={this.updateSearch}
          placeholder="Search forms"
        />
        <div className="under-construction">
          <label>
            <input
              type="checkbox"
              checked={this.state.showIncompleteForms}
              onChange={this.updateShowIncomplete}
            />
            {__("show forms under construction")}
          </label>
        </div>
        <div className="forms-list">
          <FilteredForms
            searchValue={this.state.searchValue}
            showIncompleteForms={this.state.showIncompleteForms}
          >
            <FillableForm
              readyForUsers={true}
              name="Application for Expungement of Adult Criminal History"
              keywords="application certificate eligibility"
              shortDescription={__("app for coe short descr")}
              appUrl={this.props.match.url + "/adult-coe-form"}
              downloadUrl="https://bci.utah.gov/wp-content/uploads/sites/15/2018/07/Exp-App-7-2018.pdf"
              previewUrls={[
                "/static/forms/application-for-coe/Exp-App-7-2018-1.png",
                "/static/forms/application-for-coe/Exp-App-7-2018-2.png"
              ]}
            />
            <FillableForm
              name={__("app for coe with release")}
              readyForUsers={true}
              keyworks="application certificate eligibility release third party"
              shortDescription={__("app for coe with release short descr")}
              appUrl={
                this.props.match.url + "/application-for-coe-with-release"
              }
              downloadUrl="/static/forms/application-for-coe-with-release/BCI_Third_Party_Release_Form_and_Application.pdf"
              previewUrls={[
                "/static/forms/application-for-coe-with-release/BCI_Third_Party_Release_Form_and_Application-1.png",
                "/static/forms/application-for-coe-with-release/BCI_Third_Party_Release_Form_and_Application-2.png"
              ]}
            />
            <FillableForm
              name={__("petition conviction name")}
              readyForUsers={true}
              keywords="petition conviction"
              shortDescription={__("petition conviction short descr")}
              appUrl={this.props.match.url + "/petition-for-conviction"}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/01_Petition_to_Expunge_Records_Criminal-conviction.pdf"
              previewUrls={[
                "/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png",
                "/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png"
              ]}
            />
            <FillableForm
              name={__("motion to waive fees name")}
              readyForUsers={false}
              keywords="waive fees motion"
              shortDescription={__("motion to waive fees short descr")}
              appUrl={this.props.match.url + "/motion-to-waive-fees"}
              downloadUrl="https://www.utcourts.gov/resources/forms/waiver/docs/01_Motion_and_Affidavit_to_Waive_Fees.pdf"
              previewUrls={[
                "/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-01.png",
                "/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-02.png"
              ]}
            />
            <FillableForm
              name={__("Coversheet")}
              readyForUsers={false}
              keywords="coversheet"
              shortDescription={__("Civil Filing Coversheet")}
              appUrl={this.props.match.url + "/coversheet"}
              downloadUrl="https://www.utcourts.gov/resources/forms/waiver/docs/Civil_Filing_Coversheet.pdf"
              previewUrls={[
                "/static/forms/coversheet/coversheet-1.png",
                "/static/forms/coversheet/coversheet-2.png"
              ]}
            />
            <FillableForm
              name={__("petition for drug conviction")}
              readyForUsers
              keywords="drug conviction petition"
              shortDescription={__(
                "petition for drug conviction short description"
              )}
              appUrl={this.props.match.url + "/petition-for-drug-conviction"}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/01_Petition_to_Expunge_Records_Criminal-drug_possession.pdf"
              previewUrls={[
                "/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-1.png",
                "/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-2.png"
              ]}
            />
            <FillableForm
              name="Petition for Dismissal or Acquittal"
              readyForUsers={true}
              keywords="petition to expunge records dismissal or acquittal"
              shortDescription="This form is a court order that you ask the judge to sign to expunge a Dismissal or Acquittal. You must first obtain a Certificate of Eligibility before filing this form."
              appUrl={
                this.props.match.url + "/petition-for-dismissal-or-acquittal"
              }
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/01_Petition_to_Expunge_Records_Criminal-dismissal_or_acquittal.pdf"
              previewUrls={[
                "/static/forms/petition-for-dismissal-or-acquittal/01_Petition_to_Expunge_Records_Criminal-dismissal_or_acquittal-1.png",
                "/static/forms/petition-for-dismissal-or-acquittal/01_Petition_to_Expunge_Records_Criminal-dismissal_or_acquittal-2.png"
              ]}
            />
            <FillableForm
              name="Acceptance of Service"
              readyForUsers
              keywords="prosecutor acceptance serve"
              shortDescription="A form you must bring to the prosecutor and then file with the courts with your Petition for Expungement"
              appUrl={this.props.match.url + "/acceptance-of-service"}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/09_Acceptance_of_service.pdf"
              previewUrls={[
                "/static/forms/acceptance-of-service/Acceptance_of_service-1.png"
              ]}
            />
            <FillableForm
              name="Draft court order for expungement conviction"
              readyForUsers={false}
              keywords="prosecutor acceptance serve"
              shortDescription="A form you must bring to the prosecutor and then file with the courts with your Petition for Expungement"
              appUrl={this.props.match.url + "/draft-court-order-conviction"}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/08_Order-conviction.pdf"
              previewUrls={[
                "/static/forms/draft-court-order-conviction/draft_court_order_conviction-1.png",
                "/static/forms/draft-court-order-conviction/draft_court_order_conviction-2.png",
                "/static/forms/draft-court-order-conviction/draft_court_order_conviction-3.png"
              ]}
            />
            <FillableForm
              name="Draft court order for expungement (drug possession conviction)"
              readyForUsers={false}
              keywords="court order expunge drug possession conviction"
              shortDescription="A form you must bring to the prosecutor and then file with the courts with your Petition for Expungement (drug possession)"
              appUrl={
                this.props.match.url +
                "/draft-court-order-drug-possession-conviction"
              }
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/08_Order-drug_possession.pdf"
              previewUrls={[
                "/static/forms/draft-court-order-drug-possession-conviction/draft_court_order_drug_possession_conviction-1.png",
                "/static/forms/draft-court-order-drug-possession-conviction/draft_court_order_drug_possession_conviction-2.png",
                "/static/forms/draft-court-order-drug-possession-conviction/draft_court_order_drug_possession_conviction-3.png"
              ]}
            />
            <FillableForm
              name="Draft court order on motion to waive fees"
              readyForUsers={false}
              keywords="draft court order motion waive fees"
              shortDescription="A form you file with the courts along with your expungement petition so the judge can rule on your motion to waive fees"
              appUrl={
                this.props.match.url + "/draft-court-order-motion-waive-fees"
              }
              downloadUrl="https://www.utcourts.gov/resources/forms/waiver/docs/1302GE_Order_on_Motion_to_Waive_Fees.pdf"
              previewUrls={[
                "/static/forms/draft-court-order-motion-waive-fees/draft_court_order_motion_waive_fees-1.png",
                "/static/forms/draft-court-order-motion-waive-fees/draft_court_order_motion_waive_fees-2.png",
                "/static/forms/draft-court-order-motion-waive-fees/draft_court_order_motion_waive_fees-3.png"
              ]}
            />
            <FillableForm
              name="Order on Petition to Expunge Records (Charges never filed)"
              readyForUsers={false}
              keywords="order on petition to expunge records charges never filed"
              shortDescription="Court order given to the judge when charges are dropped"
              appUrl={`${this.props.match.url}/order-on-petition-charges-not-filed`}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/08_Order-charges_never_filed.pdf"
              previewUrls={[
                "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-1.png",
                "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-2.png",
                "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-3.png"
              ]}
            />
            <FillableForm
              name="Reply to Victim's Statement or Prosecutor's Statement or AP&P Response"
              readyForUsers={true}
              keywords="reply to victim statement or prosecutor ap&p adult probation and parole response"
              shortDescription="Reply to statement made by prosecutor or, victim, or adult probation and parole"
              appUrl={`${this.props.match.url}/reply-to-statement`}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/03_Petitioner_Reply.pdf"
              previewUrls={[
                "/static/forms/reply-to-statement/03_Petitioner_Reply-1.png",
                "/static/forms/reply-to-statement/03_Petitioner_Reply-2.png",
                "/static/forms/reply-to-statement/03_Petitioner_Reply-3.png"
              ]}
            />
            <FillableForm
              name="Petition for Expungement (Special Certificate from BCI)"
              readyForUsers={true}
              keywords="petition for expungement special certificate from bci"
              shortDescription="The form for petitioning for an expungement when you have a special certificate from the BCI."
              appUrl={`${this.props.match.url}/petition-for-expungement-from-bci`}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/08_Order-special_certificate.pdf"
              previewUrls={[
                "/static/forms/petition-for-expungement-from-bci/08_Order-special_certificate-1.png",
                "/static/forms/petition-for-expungement-from-bci/08_Order-special_certificate-2.png",
                "/static/forms/petition-for-expungement-from-bci/08_Order-special_certificate-3.png"
              ]}
            />
          </FilteredForms>
        </div>
      </Scoped>
    );
  }
  updateSearch = evt => {
    this.setState({
      searchValue: evt.target.value
    });
  };
  updateShowIncomplete = evt => {
    localStorage.setItem("show-incomplete-forms", evt.target.checked);
    this.setState({ showIncompleteForms: evt.target.checked });
  };
}

const css = `
  & .forms-list {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: -32px;
    margin-bottom: -32px;
  }

  & .under-construction {
    margin: 8px 0;
  }
`;
