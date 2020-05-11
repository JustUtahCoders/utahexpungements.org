import React from "react";
import {
  courtTypeOptions,
  DistrictCourtList,
  JusticeCourtList,
  resolvedByOptions
} from "../form-common-options/form-common-options";
import FormThatPrints from "../inputs/form-that-prints.component";
import GroupSelect from "../inputs/group-select.component.js";
import Radio from "../inputs/radio.component.js";
import Section from "../inputs/section.component";
import TextInput from "../inputs/text-input.component";

export default function OrderOnPetitionChargesNotFiled_Web({ data }) {
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
        <Radio
          dataKey="case.resolvedBy"
          label={__("will be resolved by")}
          options={resolvedByOptions}
        />
      </Section>
    </FormThatPrints>
  );
}
