import React from "react";
import Section from "../inputs/section.component";
import TextArea from "../inputs/text-area.component";
import TextInput from "../inputs/text-input.component";
import FormThatPrints from "../inputs/form-that-prints.component";
import Select from "../inputs/select.component";
import {
  caseFiledOptions,
  chargeResolutionOptions,
  convictedOptions,
  courtTypeOptions,
  DistrictCourtList,
  JusticeCourtList,
  petitionerRepresentativeOptions
} from "../form-common-options/form-common-options";
import Radio from "../inputs/radio.component";
import GroupSelect from "../inputs/group-select.component";
import Checkbox from "../inputs/checkbox.component";

export default function SpecialBci_Web({ data }) {
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

      <Section name="3. Records of Crime">
        <Radio
          dataKey="case.hasConviction"
          label={
            <span style={{ whiteSpace: "pre-wrap" }}>
              {__("was petitioner convicted for case")}
            </span>
          }
          options={convictedOptions}
        />
        <br />
        {data.case.hasConviction === "Yes" && (
          <>
            Choose all that apply:
            <Checkbox
              dataKey="case.wasNotSevereCrime"
              label={
                <span style={{ whiteSpace: "pre-wrap" }}>
                  {__("severe crime list")}
                </span>
              }
            />
            <Checkbox
              dataKey="case.noCriminalCasePending"
              label={__("no criminal case pending")}
            />
            <Checkbox
              dataKey="case.notConvictedOfCriminalEpisodes"
              label={
                <span style={{ whiteSpace: "pre-wrap" }}>
                  {__("not convincted of criminal episodes")}
                </span>
              }
            />
            <Checkbox dataKey="case.hasPaidFines" label={__("has paid fees")} />
            <Checkbox
              dataKey="case.timePeriodsHaveElapsed"
              label={
                <span style={{ whiteSpace: "pre-wrap" }}>
                  {__("time periods have elapsed")}
                </span>
              }
            />
          </>
        )}
        {data.case.hasConviction === "No" && (
          <>
            <TextInput
              dataKey="case.arrestedDate"
              label={__("arrested date")}
            />
            <TextInput
              dataKey="case.leaName"
              label={__("law enforcement agency")}
            />
            <TextInput
              dataKey="case.leaFileNumber"
              label={__("lea file number")}
            />
            <Radio
              dataKey="case.wasFiled"
              label={__("was case filed")}
              options={caseFiledOptions}
            />
            <Checkbox
              dataKey="case.thirtyDaysPassed"
              label={__("thirty days passed since arrest")}
            />
            <Checkbox
              dataKey="case.noArrestsSinceLast"
              label={__("no arrests since last")}
            />
            <Radio
              dataKey="case.chargeResolution"
              label={__("resolution of the conviction")}
              options={chargeResolutionOptions}
            />
          </>
        )}
      </Section>

      <Section name="4. Certificate of Eligibility from BCI">
        <TextArea
          dataKey="case.bciEligibilityCause"
          label={__("bci eligibility cause")}
        />
      </Section>

      <Section name="5. Public Interest">
        <TextArea
          dataKey="case.publicInterestCause"
          label={__("public interest cause")}
        />
      </Section>
    </FormThatPrints>
  );
}
