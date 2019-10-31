import React from "react";
import { Scoped } from "kremling";
import FormThatPrints from "../inputs/form-that-prints.component";
import TextInput from "../inputs/text-input.component";
import Section from "../inputs/section.component.js";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import Select from "../inputs/select.component.js";
import {
  resolvedByOptions,
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList
} from "../form-common-options/form-common-options";

const resolvedMatter = [
  { label: `The stipulation of the parties`, value: "stipulation" },
  {
    label: `The pleadings and other papers of the parties.`,
    value: "pleadings"
  },
  { label: `A hearing served by all parties`, value: "hearing" }
];

const plaintiffOptions = [
  { label: `Plaintiff present`, value: "presentPlaintiff" },
  {
    label: `Plaintiff not present`,
    value: "notPresentPlaintiff"
  },
  { label: `Plaintiff represented`, value: "representedPlaintiff" },
  { label: `Plaintiff not represented`, value: "notRepresentedPlaintiff" }
];

const defenderOptions = [
  { label: `Defender present`, value: "presentDefender" },
  {
    label: `Defender not present`,
    value: "notPresentDefender"
  },
  { label: `Defender represented`, value: "representedDefender" },
  { label: `Defender not represented`, value: "notRepresentedDefender" }
];

export default ({
  data: {
    case: { courtType, county, resolvedBy, plaintiff, defender }
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
    <Section name="3. Matter">
      <Select
        label="The matter before the court is being resolved by"
        dataKey="case.resolvedBy"
        options={resolvedMatter}
      />
      {resolvedBy === "hearing" && (
        <>
          <TextInput
            dataKey="hearingDate"
            label="Hearing held on"
            placeholder="10/30/19"
          />
        </>
      )}
      <Radio dataKey="case.plaintiff" options={plaintiffOptions} />
      {plaintiff === "representedPlaintiff" && (
        <TextInput
          dataKey="case.plaintiffRep"
          label="Plaintiff Representative Full Name"
        />
      )}
      <Radio dataKey="case.defender" options={defenderOptions} />
      {defender === "representedDefender" && (
        <TextInput
          dataKey="case.defenderRep"
          label="Defender Representative Full Name"
        />
      )}
    </Section>
  </FormThatPrints>
);
