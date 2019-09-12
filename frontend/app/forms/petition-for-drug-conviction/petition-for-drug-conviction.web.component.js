import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import Select from "../inputs/select.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import Radio from "../inputs/radio.component.js";
import TextArea from "../inputs/text-area.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import {
  petitionerRepresentativeOptions,
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList,
  pryingQuestionOptions
} from "../form-common-options/form-common-options";

export default function PetitionForDrugConviction_Web({ data }) {
  return (
    <Scoped css={css}>
      <FormThatPrints>
        <Section name="1. Personal information">
          <TextInput dataKey="person.firstName" label="First name" />
          <TextInput dataKey="person.middleName" label="Middle name" />
          <TextInput dataKey="person.lastName" label="Last name" />
          <TextInput dataKey="person.addressStreet" label="Street" />
          <TextInput dataKey="person.addressCity" label="City" />
          <TextInput dataKey="person.addressState" label="State" />
          <TextInput dataKey="person.addressZip" label="Zip" />

          <TextInput dataKey="person.homePhone" label="Home Phone Number" />
          <TextInput dataKey="person.email" label="Email" />
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
            label="In which court was the case"
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

          <TextInput dataKey="case.number" label="Case Number" />
          <TextInput dataKey="case.judgeName" label="Judge Name" />
          <Select
            dataKey="drugConviction.pryingQuestion"
            label="Choose One"
            options={pryingQuestionOptions}
          />
          {data.drugConviction &&
            data.drugConviction.pryingQuestion === "yes" && (
              <TextInput
                dataKey="drugConviction.pryingQuestionAnswer"
                label="I am managing my addiction by:"
              />
            )}

          <TextArea
            dataKey="case.publicInterest"
            label={__(
              "explain why expunging this crime is not contrary to the public's interest"
            )}
          />
        </Section>
      </FormThatPrints>
    </Scoped>
  );
}

const css = `
`;
