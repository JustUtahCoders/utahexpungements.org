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
        <TextInput dataKey="person.firstName" label={__("first name")} />
        <TextInput dataKey="person.middleName" label={__("middle name")} />
        <TextInput dataKey="person.lastName" label={__("last name")} />
        <TextInput dataKey="person.addressStreet" label={__("street")} />
        <TextInput dataKey="person.addressCity" label={__("city")} />
        <TextInput dataKey="person.addressState" label={__("state")} />
        <TextInput dataKey="person.addressZip" label={__("zip")} />
        <TextInput dataKey="person.phone" label={__("phone")} />
        <TextInput dataKey="person.email" label={__("email address")} />
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
          dataKey="case.summons"
          label="Summons (File or attach copy)"
        />
        <Checkbox
          dataKey="case.complaintOrPetition"
          label="Complaint or Petition"
        />

        <Checkbox
          dataKey="case.amendedComplaintOrPetition"
          label="Amended Complaint or Petition"
        />

        <Checkbox
          dataKey="case.noticeOfDivorceEducationRequirements"
          label="Notice of Divorce Education Requirements"
        />

        <Checkbox
          dataKey="case.noticeOfURCP26.1"
          label="Notice of URCP 26.1 Disclosure and Discovery Requirements in Domestic Relations Actions"
        />

        <Checkbox
          dataKey="case.noticeOfURCP26.3"
          label="Notice of URCP 26.3 Disclosure Requirements in Unlawful Detainer Actions"
        />

        <Checkbox dataKey="case.parentingPlan" label="Parenting Plan" />

        <Checkbox dataKey="case.other" label="Other (describe below)" />
        {data.case.other && (
          <TextArea dataKey="case.otherDocumentsServed" label="Describe" />
        )}
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
          dataKey="person.proofOfCompletedServiceMailFullname"
          label="Name of Addressee"
        />
        <TextInput
          dataKey="person.proofOfCompletedServiceMailAddressStreet"
          label="Street Address"
        />
        <TextInput
          dataKey="person.proofOfCompletedServiceMailAddressCity"
          label="City"
        />
        <TextInput
          dataKey="person.proofOfCompletedServiceMailAddressState"
          label="State"
        />
        <TextInput
          dataKey="person.proofOfCompletedServiceMailAddressZip"
          label="Zip Code"
        />
        <p className="web-form-input">
          I have attached a signed receipt proving delivery. It was signed by:
        </p>
        <Checkbox
          dataKey="case.proofOfCompletedServiceAddressee"
          label="the addressee personally"
        />
        <Checkbox
          dataKey="case.proofOfCompletedServiceAuthorizedPerson"
          label="someone authorized by appointment or by law to receive service of process on behalf of the addressee"
        />
      </Section>
      <Section name="3. Service by Third Person">
        <Checkbox
          dataKey="case.proofOfCompletedServiceThirdPerson"
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
      <Section name="4. Service by Third Person (continued)">
        <Checkbox
          dataKey="case.proofOfCompletedServiceDeliveredForm"
          label="On"
        />
        <TextInput
          dataKey="person.proofOfCompletedServiceDelieveredDate"
          label="date MM-DD-YYYY"
        />
        <p>I went to</p>
        <TextInput
          dataKey="person.proofOfCompletedServiceDelieveredAddressZip"
          label="(address)"
        />
        <p>and I delivered the documents listed in paragraph 1 to</p>
        <TextInput
          dataKey="person.proofOfCompletedServiceDelieveredName"
          label="(name)"
        />
        <p>
          who is <small>(Check one.)</small>
        </p>
        <Checkbox
          dataKey="person.defendant"
          label="the named defendant/respondent"
        />
        <Checkbox
          dataKey="person.plaintiff"
          label="the named plaintiff/petitioner"
        />
        <Checkbox
          dataKey="person.proofOfCompletedServicePersonSuitableAge"
          label="a person of suitable age and discretion residing at that address, which is the named party's residence"
        />
        {data.person.proofOfCompletedServicePersonSuitableAge && (
          <TextArea
            dataKey="person.proofOfCompletedServicePersonSuitableAgeDescribe"
            label="Describe why the person lives at the named party's residence and why they are of suitable age and discretion"
          />
        )}

        <Checkbox
          dataKey="person.agent"
          label="an agent authorized by appointment or by law to receive servie of process on behalf of the named party"
        />
        <br></br>
        <small>
          If serving a corportion, partnership, or an unincorporated association
        </small>
        <Checkbox
          dataKey="person.officer"
          label="an officer, a managing agent, general agent"
        />
        <br></br>
        <strong>OR</strong>
        <Checkbox
          dataKey="person.authorizedAgent"
          label="an agent authorized by appointment or by law to receive service of
          process and by also mailing a copy of the complaint and summons to the
          named party, if the agent is one authorized by statute to receive process
          and the statute so requires."
        />
        <br></br>
        <small>If serving a city or town</small>
        <Checkbox dataKey="person.recorder" label="the city/town recorder" />
        <br></br>
        <small>If serving a county</small>
        <Checkbox dataKey="person.clerk" label="the county clerk" />
        <br></br>
        <small>If serving the state</small>
        <Checkbox
          dataKey="person.attorneyGeneral"
          label="the attorney general, and to"
        />
        <TextInput
          dataKey="person.proofOfCompletedServicePersonStatue"
          label="(name of any other person or agency required by statute to be served)"
        />
        <TextInput
          dataKey="person.proofOfCompletedServicePersonStatueAddress"
          label="(address)"
        />
        <br></br>
        <small>If serving a department or agency of the state</small>
        <Checkbox
          dataKey="person.proofOfCompletedServiceBoardMember"
          label="a member of named party's governing board, executive employee or secretary"
        />
        <br></br>
        <small>If the document was served in some other way</small>
        <Checkbox
          dataKey="case.proofOfCompletedServiceOther"
          label="Other (describe how the document was served)"
        />
        {data.case.proofOfCompletedServiceOther && (
          <TextArea
            dataKey="case.proofOfCompletedServiceOtherDesribe"
            label="Describe"
          />
        )}
      </Section>
    </FormThatPrints>
  );
}
