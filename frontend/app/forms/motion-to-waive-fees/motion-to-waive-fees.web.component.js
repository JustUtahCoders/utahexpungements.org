import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import Select from "../inputs/select.component.js";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import CheckBox from "../inputs/checkbox.component.js";
import TextArea from "../inputs/text-area.component.js";
import {
  DistrictCourtList,
  JusticeCourtList,
  courtTypeOptions
} from "../form-common-options/form-common-options.js";

const waiveFeeRelationship = [
  { value: "plantiffPetitioner", label: "Plantiff / Petitioner" },
  {
    value: "plantiffPetitionerAttorney",
    label: "Plantiff / Petitioner's Attorney"
  },
  { value: "defendantRespondent", label: "Defendant / Respondent" },
  {
    value: "defendantRespondentAttorney",
    label: "Defendant / Respondent's Attorney"
  }
];

export default function MotionToWaiveFees_Web({ data }) {
  return (
    <Scoped css={css}>
      <FormThatPrints>
        <h1 className="web-from-input">This is a private record</h1>
        <Section name="1. Personal information">
          <TextInput dataKey="person.firstName" label="First name" />
          <TextInput dataKey="person.middleName" label="Middle name" />
          <TextInput dataKey="person.lastName" label="Last name" />
          <TextInput dataKey="person.address" label="Street address" />
          <TextInput dataKey="person.city" label="City" />
          <TextInput dataKey="person.state" label="State" />
          <TextInput dataKey="person.zip" label="Zip" />
          <TextInput dataKey="person.phone" label="Phone" />
          <TextInput dataKey="person.email" label="Email" />
          <small className="web-form-input">
            Check your email. You will receive information and documents at this
            email address.
          </small>

          <Select
            dataKey="person.relation"
            label="Relation"
            options={waiveFeeRelationship}
          />

          {data.person.relation &&
            data.person.relation.includes("Attorney") && (
              <TextInput label="Bar Number" dataKey="person.attorney" />
            )}
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

          <TextInput dataKey="case.number" label="Case number" />
          <TextInput dataKey="case.judge" label="Judge" />
          <TextInput dataKey="case.commissioner" label="Commissioner" />
          <small className="web-form-input">(Domestic cases)</small>
        </Section>
        <Section name="3. Fees to waive">
          <p className="web-form-input">
            I ask for the following fee(s) to be waived:
          </p>
          <small className="web-form-input">(Choose all that apply)</small>
          <CheckBox dataKey="case.filingFee" label="Filing fee" />
          <small className="web-form-input">(Refer to Civil Cover Sheet)</small>
          {data.case.filingFee && (
            <TextInput
              label="Filing Fee Amount"
              dataKey="case.filingFeeAmount"
            />
          )}
          <CheckBox dataKey="case.ocapFee" label="OCAP fee" />
          <small className="web-form-input">($20.00)</small>

          <CheckBox
            dataKey="case.divorceEducation"
            label="Divorce education class fee"
          />
          <small className="web-form-input">(Maximum $35.00)</small>

          <CheckBox
            dataKey="case.divorceOrientation"
            label="Divorce orientation class fee"
          />
          <small className="web-form-input">(Maximum $30.00)</small>

          <CheckBox
            dataKey="case.vitalRecordFee"
            label="Office of Vital Records fee"
          />
          <small className="web-form-input">
            (Certification of Adoption or Certificate of Divorce; $8.00)
          </small>

          <CheckBox dataKey="case.serviceFee" label="Service Fee" />
          <small className="web-form-input">(within Utah)</small>

          <CheckBox dataKey="case.appealFee" label="Appeal fee" />
          {data.case.appealFee && (
            <>
              <CheckBox label="$225 Filing fee" dataKey="case.appealFeeLarge" />
              <CheckBox
                label="$10 small claims appeal"
                dataKey="case.appealFeeSmall"
              />
              <small className="web-form-input">(Justice Court)</small>
            </>
          )}
        </Section>
        <Section name="4. Employment">
          <CheckBox dataKey="case.employed" label="I am employed" />
          {data.case.employed && (
            <>
              <small className="web-form-input">(Choose all that apply):</small>
              <CheckBox
                dataKey="case.hourlyEmployee"
                label="An hourly employee"
              />
              <small className="web-form-input">(Form W-2)</small>
              <CheckBox
                dataKey="case.salaryEmployee"
                label="A salaried employee"
              />
              <small className="web-form-input">(Form W-2)</small>
              <CheckBox dataKey="case.selfEmployed" label="Self-employeed" />
              <small className="web-form-input">
                (Form 1099, Form K-1, Schedule C, etc.)
              </small>
              <CheckBox dataKey="case.otherEmployment" label="other" />
              {data.case.otherEmployment && (
                <TextInput
                  dataKey="case.otherEmployeeExplain"
                  label="Explain"
                />
              )}
            </>
          )}
          <CheckBox dataKey="case.unemployed" label="I am unemployed" />
          {data.case.unemployed && (
            <TextArea
              dataKey="case.unemployedExplanation"
              label="I am unemployed because"
            />
          )}
        </Section>
        <Section name="5. Dependents">
          <p className="web-form-input">
            The following people depend on me for support
          </p>
          <small className="web-form-input">
            (Count Spouse, children or other dependents in your house hold.)
          </small>
          <TextInput label="Number of adults" />
          <TextInput label="Number of children under 18" />
        </Section>
        <Section name="6. Gross Monthly Income">
          <CheckBox label="I have the following monthly income before tax deductions:" />
          <small className="web-form-input">
            (For income that changes from month to month, calculate the annual
            total and divide by 12 months to list a monthly average.)
          </small>
          <CheckBox label="I have no income because:" />
        </Section>
        <Section name="7. Monthly Tax Deductions">
          <CheckBox label="I have no monthly tax deductions because I have no income." />
          <CheckBox label="I have the following monthly tax deductions." />
        </Section>
        <Section name="8. After Tax Income">
          <CheckBox label="My monthly income is:" />
          <CheckBox label="I have no income." />
        </Section>
        <Section name="9. Monthly expenses">
          <small className="web-form-input">
            (Include amounts you pay for yourself and any spouse, children or
            other dependents in your household)
          </small>
        </Section>
        <Section name="10. Business Interest">
          <CheckBox label="I have no business interests" />
          <CheckBox label="I have the following business interests" />
        </Section>
        <Section name="11. Financial Assets">
          <CheckBox label="I have no finicial assets." />
          <CheckBox label="I have the following finicial assets." />
        </Section>
        <Section name="12. Real Estate">
          <CheckBox label="I have no real estate" />
          <CheckBox label="I have the following real estate" />
        </Section>
        <Section name="13. Personal Property">
          <CheckBox label="I have no personal property" />
          <CheckBox label="I have the following personal property" />
        </Section>
        <Section name="14. Debts Owed">
          <CheckBox label="I do not owe any debts" />
          <CheckBox label="I do owe the following debts" />
        </Section>
        <Section name="15. Other">
          <CheckBox label="The following facts also show why I cannot pay these court fees." />
        </Section>
      </FormThatPrints>
    </Scoped>
  );
}

const css = `
`;
