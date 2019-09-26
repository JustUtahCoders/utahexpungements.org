import React from "react";
import { Scoped, useCss } from "kremling";
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
  { value: "plaintiffPetitioner", label: "plaintiff / Petitioner" },
  {
    value: "plaintiffPetitionerAttorney",
    label: "plaintiff / Petitioner's Attorney"
  },
  { value: "defendantRespondent", label: "Defendant / Respondent" },
  {
    value: "defendantRespondentAttorney",
    label: "Defendant / Respondent's Attorney"
  }
];

export default function MotionToWaiveFees_Web({ data }) {
  const scope = useCss(css);
  return (
    <FormThatPrints {...css}>
      <h1 className="web-from-input">This is a private record</h1>
      <Section name="1. Personal information">
        <TextInput dataKey="person.firstName" label="First name" />
        <TextInput dataKey="person.middleName" label="Middle name" />
        <TextInput dataKey="person.lastName" label="Last name" />
        <TextInput dataKey="person.addressStreet" label="Street address" />
        <TextInput dataKey="person.addressCity" label="City" />
        <TextInput dataKey="person.addressState" label="State" />
        <TextInput dataKey="person.addressZip" label="Zip" />
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

        {data.person.relation && data.person.relation.includes("Attorney") && (
          <TextInput label="Bar Number" dataKey="person.attorney.barNumber" />
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

        <TextInput dataKey="case.caseNumber" label="Case number" />
        <TextInput dataKey="case.judgeName" label="Judge" />
        <TextInput dataKey="case.commissionerName" label="Commissioner" />
        <small className="web-form-input">(Domestic cases)</small>
      </Section>

      <Section name="3. Fees to waive">
        <p className="web-form-input">
          I ask for the following fee(s) to be waived:
        </p>
        <small className="web-form-input">(Choose all that apply)</small>
        <CheckBox
          dataKey="case.filingFee"
          label="Filing fee"
          name="feesToWaive"
        />
        <small className="web-form-input">(Refer to Civil Cover Sheet)</small>
        {data.case.filingFee && (
          <TextInput label="Filing Fee Amount" dataKey="case.filingFeeAmount" />
        )}
        <CheckBox dataKey="case.ocapFee" label="OCAP fee" name="feesToWaive" />
        <small className="web-form-input">($20.00)</small>

        <CheckBox
          name="feesToWaive"
          dataKey="case.divorceEducation"
          label="Divorce education class fee"
        />
        <small className="web-form-input">(Maximum $35.00)</small>

        <CheckBox
          dataKey="case.divorceOrientation"
          label="Divorce orientation class fee"
          name="feesToWaive"
        />
        <small className="web-form-input">(Maximum $30.00)</small>

        <CheckBox
          dataKey="case.vitalRecordFee"
          label="Office of Vital Records fee"
          name="feesToWaive"
        />
        <small className="web-form-input">
          (Certification of Adoption or Certificate of Divorce; $8.00)
        </small>

        <CheckBox
          dataKey="case.serviceFee"
          label="Service Fee"
          name="feesToWaive"
        />
        <small className="web-form-input">(within Utah)</small>

        <CheckBox
          dataKey="case.appealFee"
          label="Appeal fee"
          name="feesToWaive"
        />
        {data.case.appealFee && (
          <>
            <CheckBox
              label="$225 Filing fee"
              dataKey="case.appealFeeLarge"
              name="filingFeeAmount"
            />
            <CheckBox
              label="$10 small claims appeal"
              dataKey="case.appealFeeSmall"
              name="filingFeeAmount"
            />
            <small className="web-form-input">(Justice Court)</small>
          </>
        )}
        <CheckBox
          dataKey="case.otherFeeToWaive"
          label="Other"
          name="feesToWaive"
        />
        {data.case.otherFeeToWaive && (
          <>
            <TextInput label="Explain" dataKey="case.otherFeeToWaive.name" />
            <TextInput label="Amount" dataKey="case.otherFeeToWaive.amount" />
          </>
        )}
      </Section>

      <Section name="4. Employment">
        <CheckBox
          dataKey="case.employed"
          label="I am employed"
          name="employmentStatuses"
        />
        {data.case.employed && (
          <>
            <small className="web-form-input">(Choose all that apply):</small>
            <CheckBox
              dataKey="case.hourlyEmployee"
              label="An hourly employee"
              name="employmentType"
            />
            <small className="web-form-input">(Form W-2)</small>
            <CheckBox
              dataKey="case.salaryEmployee"
              label="A salaried employee"
              name="employmentType"
            />
            <small className="web-form-input">(Form W-2)</small>
            <CheckBox
              dataKey="case.selfEmployed"
              label="Self-employed"
              name="employmentType"
            />
            <small className="web-form-input">
              (Form 1099, Form K-1, Schedule C, etc.)
            </small>
            <CheckBox
              dataKey="case.otherEmployment"
              label="other"
              name="employmentType"
            />
            {data.case.otherEmployment && (
              <TextInput dataKey="case.otherEmployeeExplain" label="Explain" />
            )}
          </>
        )}
        <CheckBox
          dataKey="case.unemployed"
          label="I am unemployed"
          name="employmentStatuses"
        />
        {data.case.unemployed && (
          <TextArea dataKey="case.unemployedExplanation" label="Explain" />
        )}
      </Section>

      <Section name="5. Dependents">
        <p className="web-form-input">
          The following people depend on me for support
        </p>
        <small className="web-form-input">
          (Count Spouse, children or other dependents in your house hold.)
        </small>
        <TextInput label="Number of adults" dataKey="case.adultDependents" />
        <TextInput
          label="Number of children under 18"
          dataKey="case.childrenDependents"
        />
      </Section>

      <Section name="6. Gross Monthly Income">
        <CheckBox
          label="I have the following monthly income before tax deductions:"
          name="grossMonthlyIncome"
          dataKey="person.grossMonthlyIncome"
        />
        <small className="web-form-input">
          (For income that changes from month to month, calculate the annual
          total and divide by 12 months to list a monthly average.)
        </small>
        {data.person.grossMonthlyIncome && (
          <>
            <TextInput label="Work" dataKey="person.income.work" />
            <small className="web-form-input">
              (Including self employment, wages, salaries, commissions, bonuses,
              tips and overtime)
            </small>
            <TextInput
              label="Rental income"
              dataKey="person.income.rentalIncome"
            />
            <TextInput
              label="Business income"
              dataKey="person.income.businessIncome"
            />
            <TextInput label="Interest" dataKey="person.income.interest" />
            <TextInput label="Dividends" dataKey="person.income.dividends" />
            <TextInput
              label="Retirement income"
              dataKey="person.income.retirementIncome"
            />
            <small className="web-form-input">
              (Including pensions, 401(k), IRA, etc.)
            </small>
            <TextInput
              label="Workers compensation"
              dataKey="person.income.workersCompensation"
            />
            <TextInput
              label="Private disability insurance"
              dataKey="person.income.privateDisabilityInsurance"
            />
            <TextInput
              label="Social Security Disability Income"
              dataKey="person.income.ssdi"
            />
            <small className="web-form-input">(SSDI)</small>
            <TextInput
              label="Supplemental Security Income"
              dataKey="person.income.ssi"
            />
            <small className="web-form-input">(SSI)</small>
            <TextInput
              label="Social Security"
              dataKey="person.income.socialSecurityOther"
            />
            <small className="web-form-input">(Other than SSDI or SSI)</small>
            <TextInput
              label="Unemployment benefits"
              dataKey="person.income.unemploymentBenefits"
            />
            <TextInput
              label="Educational benefits"
              dataKey="person.income.educationalBenefits"
            />
            <small className="web-form-input">
              (Including grants, loans, cash scholarships, etc.)
            </small>
            <TextInput
              label="Veteran's benefits"
              dataKey="person.income.veteransBenefits"
            />
            <TextInput label="Alimony" dataKey="person.income.alimony" />
            <TextInput
              label="Child Support"
              dataKey="person.income.childSupport"
            />
            <TextInput
              label="Payments from civil litigation "
              dataKey="person.income.civilPayments"
            />
            <TextInput
              label="Victim restitution"
              dataKey="person.income.victimRestitution"
            />
            <TextInput
              label="Public assistance"
              dataKey="person.income.publicAssistance"
            />
            <small className="web-form-input">
              (Including AFDC, FEP, TANF, welfare, etc.)
            </small>
            <TextInput
              label="Financial support from household members"
              dataKey="person.income.householdFinancialSupport"
            />
            <TextInput
              label="Financial support from non-household members"
              dataKey="person.income.otherFinancialSupport"
            />
            <TextInput
              label="Trust income"
              dataKey="person.income.trustIncome"
            />
            <TextInput
              label="Annuity income"
              dataKey="person.income.annuityIncome"
            />
          </>
        )}
        <div className="web-form-input">Total:</div>
        <CheckBox
          label="I have no income because:"
          dataKey="person.noGrossMonthlyIncome"
          name="grossMonthlyIncome"
        />
        {data.person.noGrossMonthlyIncome && (
          <TextArea
            label="Explain"
            dataKey="person.noGrossMonthlyIncome.explanation"
          />
        )}
      </Section>

      <Section name="6. Monthly Tax Deductions">
        <CheckBox
          label="I have the following monthly tax deductions."
          dataKey="person.monthlyTaxDeductions"
          name="monthlyTaxDeductions"
        />
        {data.person.monthlyTaxDeductions && (
          <>
            <TextInput
              label="Federal income tax"
              dataKey="person.tax.federal"
            />
            <TextInput label="State income tax" dataKey="person.tax.state" />
            <TextInput
              label="Municipal income tax"
              dataKey="person.tax.municipal"
            />
            <TextInput label="FICA" dataKey="person.tax.FICA" />
            <TextInput label="Medicare" dataKey="person.tax.medicare" />
          </>
        )}
        <CheckBox
          label="I have no monthly tax deductions because I have no income."
          dataKey="person.noMonthlyTaxDeductions"
          name="monthlyTaxDeductions"
        />
      </Section>

      <Section name="7. Monthly expenses">
        <small className="web-form-input">
          (Include amounts you pay for yourself and any spouse, children or
          other dependents in your household)
        </small>
        <TextInput label="Rent or mortgage" dataKey="person.income.rent" />
        <TextInput
          label="Real estate taxes"
          dataKey="person.income.realEstateTax"
        />
        <small className="web-form-input">(if not included in mortgage)</small>
        <TextInput
          label="real estate insurance"
          dataKey="person.income.realEstateInsurance"
        />
        <small className="web-form-input">(if not included in mortgage)</small>
        <TextInput
          label="Real estate maintenance"
          dataKey="person.income.realEstateMaintenance"
        />
        <TextInput
          label="Food and household supplies"
          dataKey="person.income.foodHomeSupplies"
        />
        <TextInput label="Clothing" dataKey="person.income.clothing" />
        <TextInput
          label="Automobile payments"
          dataKey="person.income.autoPayments"
        />
        <TextInput
          label="Automobile insurance"
          dataKey="person.income.autoInsurance"
        />
        <TextInput label="Automobile fuel" dataKey="person.income.autoFuel" />
        <TextInput
          label="Automobile maintenance"
          dataKey="person.income.maintenance"
        />
        <TextInput
          label="Other transportation costs"
          dataKey="person.income.transportation"
        />
        <small className="web-form-input">
          (public transportation, parking, etc.)
        </small>
        <TextInput label="Utilities" dataKey="person.income.utilities" />
        <small className="web-form-input">
          (such as electricity gas, water, sewage, garbage)
        </small>
        <TextInput label="Telephone" dataKey="person.income.telephone" />
        <TextInput
          label="Paid television, cable, satellite"
          dataKey="person.income.television"
        />
        <TextInput label="Internet" dataKey="person.income.internet" />
        <TextInput
          label="Credit card payments"
          dataKey="person.income.creditCardPayments"
        />
        <TextInput
          label="Loan and other debt payments"
          dataKey="person.income.loanAndOtherDebt"
        />
        <TextInput label="Alimony" dataKey="person.income.alimony" />
        <TextInput label="Child support" dataKey="person.income.childSupport" />
        <TextInput label="Child care" dataKey="person.income.childCare" />
        <TextInput
          label="Extracurricular activities for children"
          dataKey="person.income.extraActivitiesChildren"
        />
        <TextInput label="Education" dataKey="person.income.educationChild" />
        <small className="web-form-input">(children)</small>
        <TextInput label="Education" dataKey="person.income.educationSelf" />
        <small className="web-form-input">(self)</small>
        <TextInput
          label="Health care insurance"
          dataKey="person.income.healthInsurance"
        />
        <TextInput
          label="Health care expenses"
          dataKey="person.income.healthExpenses"
        />
        <small className="web-form-input">
          (excluding insurance listed above)
        </small>
        <TextInput
          label="Other insurance"
          dataKey="person.income.otherInsurance"
        />
        <small className="web-form-input">(describe)</small>
        <TextInput
          label="Entertainment"
          dataKey="person.income.entertainment"
        />
        <TextInput
          label="Laundry and dry cleaning"
          dataKey="person.income.laundryDryClean"
        />
        <TextInput label="Donations" dataKey="person.income.donations" />
        <TextInput label="Gifts" dataKey="person.income.gifts" />
        <TextInput
          label="Union and other dues"
          dataKey="person.income.unionDues"
        />
        <TextInput
          label="Garnishments or income withholding order"
          dataKey="person.income.garnishments"
        />
        <TextInput
          label="Retirement deposits"
          dataKey="person.income.retireDeposits"
        />
        <small className="web-form-input">
          (including pensions, 401(k), IRA, etc.)
        </small>
      </Section>

      <Section name="8. Business Interest">
        <CheckBox
          label="I have no business interests"
          dataKey="person.businessInterest"
          name="businessInterests"
        />
        <CheckBox
          label="I have the following business interests"
          dataKey="person.noBusinessInterest"
          name="businessInterests"
        />
      </Section>

      <Section name="9. Financial Assets">
        <CheckBox
          label="I have no financial assets."
          dataKey="person.financialAssets"
          name="financialAssets"
        />
        <CheckBox
          label="I have the following financial assets."
          dataKey="person.noFinancialAssets"
          name="financialAssets"
        />
      </Section>

      <Section name="10. Real Estate">
        <CheckBox
          label="I have no real estate"
          dataKey="person.realEstate"
          name="realEstate"
        />
        <CheckBox
          label="I have the following real estate"
          dataKey="person.noRealEstate"
          name="realEstate"
        />
      </Section>

      <Section name="11. Personal Property">
        <CheckBox
          label="I have no personal property"
          dataKey="person.personalProperty"
          name="personalProperty"
        />
        <CheckBox
          label="I have the following personal property"
          dataKey="person.noPersonalProperty"
          name="personalProperty"
        />
      </Section>

      <Section name="12. Debts Owed">
        <CheckBox
          label="I do not owe any debts"
          dataKey="person.debtsOwed"
          name="debtsOwed"
        />
        <CheckBox
          label="I do owe the following debts"
          dataKey="person.noDebtsOwed"
          name="debtsOwed"
        />
      </Section>

      <Section name="13. Other">
        <CheckBox
          label="The following facts also show why I cannot pay these court fees."
          dataKey="person.otherReasonNotToPay"
          name="otherFacts"
        />
        {data.person.otherReasonNotToPay && (
          <TextArea label="Explain" dataKey="person.otherNoPayExplanation" />
        )}
      </Section>
    </FormThatPrints>
  );
}

const css = `
`;
