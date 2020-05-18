import React from "react";
import Section from "../inputs/section.component";
import FormThatPrints from "../inputs/form-that-prints.component";
import TextInput from "../inputs/text-input.component";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import {
  courtTypeOptions,
  DistrictCourtList,
  JusticeCourtList
} from "../form-common-options/form-common-options";

export default function OrderOnPetitionToExpungeRecords_Web({ data }) {
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
    </FormThatPrints>
  );
}
