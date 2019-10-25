import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import TextInput from "../inputs/text-input.component.js";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import {
  courtTypeOptions,
  DistrictCourtList,
  JusticeCourtList
} from "../form-common-options/form-common-options.js";

export default function ConsentAndWaiverOfHearing_Web({ data }) {
  return (
    <FormThatPrints>
      <Section name="1. Personal Information">
        <TextInput dataKey="person.firstName" label={__("first name")} />
        <TextInput dataKey="person.middleName" label={__("middle name")} />
        <TextInput dataKey="person.lastName" label={__("last name")} />
      </Section>
      <Section name="2. Case Information">
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
