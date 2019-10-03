import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import TextInput from "../inputs/text-input.component";
import Section from "../inputs/section.component.js";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import Select from "../inputs/select.component.js";
import {
  petitionerRepresentativeOptions,
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList
} from "../form-common-options/form-common-options";

export default function PetitionForDismissalOrAcquittal_Web({ data }) {
  return (
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
        <Radio
          label="Court Type"
          dataKey="case.courtType"
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
        <TextInput dataKey="case.arrestedDate" label={__("arrested date")} />
        <TextInput
          dataKey="case.lawEnforcementAgencysFileNumber"
          label={__("the law enforcement agency's file number")}
        />
        <TextInput
          dataKey="case.resultOfArrest"
          label={__(
            "the following court case was filed as a result of the arrest"
          )}
        />
      </Section>
    </FormThatPrints>
  );
}
