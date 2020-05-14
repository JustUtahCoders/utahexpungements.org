import React from "react";
import {
  courtTypeOptions,
  DistrictCourtList,
  JusticeCourtList,
  petitionerRepresentativeOptions
} from "../form-common-options/form-common-options";
import FormThatPrints from "../inputs/form-that-prints.component";
import Section from "../inputs/section.component";
import TextInput from "../inputs/text-input.component";
import Select from "../inputs/select.component";
import Radio from "../inputs/radio.component";
import GroupSelect from "../inputs/group-select.component";
import TextArea from "../inputs/text-area.component";

export default function ReplyToStatement_Web({ data }) {
  return (
    <FormThatPrints>
      <Section name="1. Personal Information">
        <TextInput dataKey="person.firstName" label={__("first name")} />
        <TextInput dataKey="person.middleName" label={__("middle name")} />
        <TextInput dataKey="person.lastName" label={__("last name")} />
        <TextInput dataKey="person.addressStreet" label={__("street")} />
        <TextInput dataKey="person.addressCity" label={__("city")} />
        <TextInput dataKey="person.addressState" label={__("state")} />
        <TextInput dataKey="person.addressZip" label={__("zip")} />
        <TextInput dataKey="person.homePhone" label={__("phone")} />
        <TextInput dataKey="person.email" label={__("email address")} />
        <Select
          dataKey="person.petitionerRepresentative"
          label={__("are you filling this out for yourself")}
          options={petitionerRepresentativeOptions}
        />
        {data.person.petitionerRepresentative === "attorney" && (
          <TextInput
            dataKey="person.petitionerBarNumber"
            label="What is your Utah Bar number?"
          />
        )}
      </Section>

      <Section name="2. Case information">
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
        <TextInput dataKey="case.caseNumber" label={__("case number")} />
        <TextInput dataKey="case.judgeName" label={__("judge full name")} />
      </Section>

      <Section name="3. Statement response">
        <TextArea
          dataKey="case.opposingStatement"
          label={__("statement made by opposition")}
        />
        <TextArea
          dataKey="case.opposingStatementDisagreementReason"
          label={__("i disagree because")}
        />
      </Section>
    </FormThatPrints>
  );
}
