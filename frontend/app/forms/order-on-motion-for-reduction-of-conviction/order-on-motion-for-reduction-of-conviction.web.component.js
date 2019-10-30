import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import TextInput from "../inputs/text-input.component";
import Section from "../inputs/section.component.js";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import {
  resolvedByOptions,
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList
} from "../form-common-options/form-common-options";

export default ({
  data: {
    case: { courtType, county }
  }
}) => (
  <FormThatPrints>
    <Section name="1. Personal Information">
      <TextInput dataKey="person.firstName" label="First Name" />
      <TextInput dataKey="person.middleName" label={__("middle name")} />
      <TextInput dataKey="person.lastName" label="Last Name" />
      <TextInput dataKey="person.addressStreet" label={__("street")} />
      <TextInput dataKey="person.addressCity" label={__("city")} />
      <TextInput dataKey="person.addressState" label={__("state")} />
      <TextInput dataKey="person.addressZip" label={__("zip")} />
      <TextInput dataKey="person.homePhone" label={__("home phone")} />
      <TextInput dataKey="person.email" label={__("email address")} />
    </Section>
    <Section name="2. Case Information">
      <Radio
        dataKey="case.courtType"
        label="Court Type"
        options={courtTypeOptions}
      />
      {courtType === "District" && (
        <GroupSelect
          dataKey="case.courtAddress"
          label="District Courts"
          groupOptions={DistrictCourtList}
        />
      )}
      {courtType === "Justice" && (
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
