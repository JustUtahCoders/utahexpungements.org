import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import TextInput from "../inputs/text-input.component.js";
import Section from "../inputs/section.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import Radio from "../inputs/radio.component.js";
import Checkbox from "../inputs/checkbox.component.js";
import TextArea from "../inputs/text-area.component.js";
import TextInputGroup from "../inputs/text-input-group.component.js";
import {
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList
} from "../form-common-options/form-common-options";

export default function ProofOfCompletedService_Web({ data }) {
  return (
    <FormThatPrints>
      <Section name="Personal Information">
        {/* <TextInput dataKey="person.firstName" label={__("First Name")} />
        <TextInput dataKey="person.middleName" label={_("Middle Name")} />
        <TextInput dataKey="person.lastName" label={_("Last Name")} />
        <TextInput dataKey="person.addressStreet" label={_("Street Address")} />
        <TextInput dataKey="person.addressCity" label={_("City")} />
        <TextInput dataKey="person.addressState" label={_("State")} />
        <TextInput dataKey="person.addressZip" label={_("Zip Code")} />
        <TextInput dataKey="person.phone" label={_("Phone")} />
        <TextInput dataKey="person.email" label={_("Email")} /> */}
        <TextInput dataKey="person.firstName" label="First Name" />
        <TextInput dataKey="person.middleName" label="Middle Name" />
        <TextInput dataKey="person.lastName" label="Last Name" />
        <TextInput dataKey="person.addressStreet" label="Street Address" />
        <TextInput dataKey="person.addressCity" label="City" />
        <TextInput dataKey="person.addressState" label="State" />
        <TextInput dataKey="person.addressZip" label="Zip Code" />
        <TextInput dataKey="person.phone" label="Phone" />
        <TextInput dataKey="person.email" label="Email" />
        <small className="web-form-input">
          Check your email. You will receive information and documents at this
          email address.
        </small>
      </Section>

      <Section name="Case Information">
        <Radio
          dataKey="case.courtType"
          label="Court Type"
          options={courtTypeOptions}
        />

        {data.case.courtType === "District" && (
          <GroupSelect
            dataKey="case.courtAddress"
            label="District Courts"
            groupOptions={DistrictCourtList}
          />
        )}
        {data.case.courtType === "Justice" && (
          <GroupSelect
            dataKey="case.courtAddress"
            label="Justice Courts"
            groupOptions={JusticeCourtList}
          />
        )}
        <TextInput dataKey="case.caseNumber" label="Case Number" />
        <TextInput dataKey="case.judgeName" label="Judge Full Name" />
        <TextInput
          dataKey="case.commissionerName"
          label="Commissioner (Domestic Cases)"
        />
      </Section>

      <Section name="1. Documents Served">
        <small className="web-form-input">
          The following documents were served by the method described below
        </small>
        <small className="web-form-input">(Choose all that apply:)</small>
        <Checkbox
          dataKey="proofOfCompletedService_case.summons"
          label="Summons (File or attach copy)"
        />
        <Checkbox
          dataKey="proofOfCompletedService_case.complaintOrPetition"
          label="Complaint or Petition"
        />

        <Checkbox
          dataKey="proofOfCompletedService_case.amendedComplaintOrPetition"
          label="Amended Complaint or Petition"
        />

        <Checkbox
          dataKey="proofOfCompletedService_case.noticeOfDivorceEducationRequirements"
          label="Notice of Divorce Education Requirements"
        />

        <Checkbox
          dataKey="proofOfCompletedService_case.noticeOfURCP26.1"
          label="Notice of URCP 26.1 Disclosure and Discovery Requirements in Domestic Relations Actions"
        />

        <Checkbox
          dataKey="proofOfCompletedService_case.noticeOfURCP26.3"
          label="Notice of URCP 26.3 Disclosure Requirements in Unlawful Detainer Actions"
        />

        <Checkbox
          dataKey="proofOfCompletedService_case.parentingPlan"
          label="Parenting Plan"
        />

        <Checkbox
          dataKey="proofOfCompletedService_case.other"
          label="Other (describe)"
        />
        {/* {case.proofOfCompletedService_case && ( 
          <TextArea label="Describe" dataKey="proofOfCompletedService_case.otherDocumentsServed" />
        )} */}
        <TextArea
          dataKey="proofOfCompletedService_case.otherDocumentsServed"
          label="Describe"
        />
      </Section>
      <Section name="Complete section 2, or 3 AND 4"></Section>
      <Section name="2. Service by Mail">
        <p className="web-form-input">
          Service by mail requires a signed receipt. You will need to attach the
          receipt after printing the form.
        </p>
        <p className="web-form-input">
          I served the following person by sending a copy of the documents
          listed in section 3 by mail or commerical courier service to:
        </p>
        <TextInput
          dataKey="proofofcompletedservice_person.fullname"
          label="Name of Addressee"
        />
        <TextInput
          dataKey="proofofcompletedservice_person.addressStreet"
          label="Street Address"
        />
        <TextInput
          dataKey="proofofcompletedservice_person.addressCity"
          label="City"
        />
        <TextInput
          dataKey="proofofcompletedservice_person.addressState"
          label="State"
        />
        <TextInput
          dataKey="proofofcompletedservice_person.addressZip"
          label="Zip Code"
        />
        <p className="web-form-input">
          I have attached a signed receipt proving delivery. It was signed by:
        </p>
        <Checkbox
          dataKey="proofOfCompletedService_case.addressee"
          label="the addressee personally"
        />
        <Checkbox
          dataKey="proofOfCompletedService_case.someoneElse"
          label="someone authorized by appointment or by law to receive service of process on behalf of the addressee"
        />
      </Section>
      <Section name="3. Service by Third Person">
        <Checkbox
          dataKey="proofOfCompletedService_case.other"
          label="I am over the age of 18, and"
        />
        <p className="web-form-input">
          I am not a party or an attorney for a party to this action.
        </p>
        <p className="web-form-input">
          I have not been convicted of a felony violation of a sex offsense{" "}
          <small>(Listed in Utah Code 77-41-102(16)</small>.
        </p>
        <p className="web-form-input">
          I am not a respondent in a protective order proceeding
          <small>(Utah Code 78B-7-101 et seq.)</small>.
        </p>
      </Section>
      <Section name="4. Service by Third Person (continued)"></Section>
    </FormThatPrints>
  );
}
