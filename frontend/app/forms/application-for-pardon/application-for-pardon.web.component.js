import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import Radio from "../inputs/radio.component.js";
import TextArea from "../inputs/text-area.component.js";

const employerInputs = [
  "NameOfEmployer",
  "EmployersAddress",
  "EmployersPhone",
  "JobTitle",
  "HourlyRateOrAnnualSalary",
  "HoursPerWeek"
];

export default function ApplicationForPardon_Web({ data }) {
  return (
    <Scoped css={css}>
      <FormThatPrints>
        <Section name="1. Personal information">
          <TextInput dataKey="person.firstName" label={__("first name")} />
          <TextInput dataKey="person.middleName" label={__("middle name")} />
          <TextInput dataKey="person.lastName" label={__("last name")} />
          <TextInput dataKey="person.birthday" label={__("birthday")} />
          <TextInput
            dataKey="person.previouslyUsedNames"
            label={__("previously used names")}
          />
          <TextInput dataKey="person.addressStreet" label={__("street")} />
          <TextInput dataKey="person.addressCity" label={__("city")} />
          <TextInput dataKey="person.addressState" label={__("state")} />
          <TextInput dataKey="person.addressZip" label={__("zip")} />
          <TextInput
            dataKey="person.socialSecurity"
            label={__("social security number")}
          />
          <TextInput
            dataKey="person.driversLicenseNumber"
            label={__("drivers license #")}
          />
          <TextInput
            dataKey="person.driversLicenseState"
            label={__("drivers license state")}
          />
          <TextInput
            dataKey="person.driversLicenseState"
            label={__("drivers license state")}
          />
          <TextInput
            dataKey="person.offenderNumber"
            label={__("offender #")} // Offender #
          />
          <TextInput
            dataKey="person.fbiNumber"
            label={__("fbi #")} // FBI #
          />
          <TextInput dataKey="person.homePhone" label={__("home phone")} />
          <TextInput dataKey="person.dayPhone" label={__("day phone")} />
          <TextInput dataKey="person.email" label={__("email address")} />
        </Section>

        <Section name="2. Pardon Request and Consideration">
          <Radio
            dataKey="case.previouslyApplied"
            label={__("previously applied")}
            options={[
              {
                label: "No",
                value: "no"
              },
              {
                label: "Yes",
                value: "yes"
              }
            ]}
          />

          <p className="web-form-input">
            If yes, please provide the date of the application, the outcome of
            the application, list any conviction(s) pardoned, and attach a copy
            of the application and the Pardon Certificate.
          </p>
          {data.person.previouslyApplied && (
            <TextArea
              dataKey="case.explaination" // needs more specific name
              label={__("previously please explain")}
            />
          )}
        </Section>
        <Section name="3. Family Information">
          <p className="web-form-input">
            If married, please provide the following information for your spouse
          </p>
          <TextInput
            dataKey="person.spouseFirstName"
            label={__("first name spouse")}
          />
          <TextInput
            dataKey="person.spouseMiddleName"
            label={__("middle name spouse")}
          />
          <TextInput
            dataKey="person.spouseLastName"
            label={__("last name spouse")}
          />
          <TextInput
            dataKey="person.spouseAddressStreet"
            label={__("street")}
          />
          <TextInput dataKey="person.spouseAddressCity" label={__("city")} />
          <TextInput dataKey="person.spouseAddressState" label={__("state")} />
          <TextInput dataKey="person.spouseAddressZip" label={__("zip")} />
          <TextInput
            dataKey="person.spouseHomePhone"
            label={__("home phone")}
          />
          <TextInput dataKey="person.spouseDayPhone" label={__("day phone")} />
          <TextInput dataKey="person.spousEemail" label={__("email address")} />
          // children
          <TextInput dataKey="person.child1" label={__("Child #1")} />
          <TextInput dataKey="person.child2" label={__("Child #2")} />
          <TextInput dataKey="person.child3" label={__("Child #3")} />
          <TextInput dataKey="person.child4" label={__("Child #4")} />
          <TextInput dataKey="person.child5" label={__("Child #5")} />
        </Section>

        <Section name="4. Employment History">
          <p className="web-form-imput">
            Beginning with your current or most recent, please list your last
            five places of employment, and provide the requested information for
            each.
          </p>
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
                <TextArea dataKey="case.otherEmployeeExplain" label="Explain" />
              )}
            </>
          )}
          {data.case.employed &&
            (data.case.hourlyEmployee ||
              data.case.salaryEmployee ||
              data.case.selfEmployed ||
              data.case.otherEmployment) && (
              <TextInputGroup
                groupLabel="Current Employers"
                buttonLabel="Employer"
                inputs={employerInputs}
                dataKey="person.currentEmployment"
                maxInputs={3}
              />
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

        <Section name="5. Military History">
          <p className="web-form-imput">
            If you have ever served in the United States Military, Reserves, or
            National Guard, please provide the following information.
          </p>
          <TextInput
            dataKey="person.militaryBranchOfService"
            label="Branch of Service"
          />
          <TextInput
            dataKey="person.militaryDatesOfService"
            label="Dates of Service"
          />
          <TextInput dataKey="person.militaryServiceMOS" label="Service MOS" />
          <TextInput
            dataKey="person.militaryLastUnitAssigment"
            label="Last Unit Assignment"
          />
          <TextInput
            dataKey="person.militaryLastBaseAssignment"
            label="Last Base Assignment"
          />
          <TextInput
            dataKey="person.militaryLastCommandingOfficer"
            label="Last Commanding Officer"
          />
          <TextInput
            dataKey="person.militaryTypeOfDischarge"
            label="Type of Discharge"
          />
          <TextInput
            dataKey="person.militaryServiceAwards"
            label="Service Awards or Commendations"
          />
        </Section>

        <Section name="6. Expungement History">
          <p className="web-form-imput">
            Utah Law provides for a process known as Expungement, whereby some
            arrests and convictions can be expunged or purged from your criminal
            history. (See Utah Code Ann. §77-40-101). Below, please detail your
            attempts to expunge the crimes for which you are seeking a pardon.
            If you have ever been denied a Certificate of Eligibility, denied an
            expungement, or otherwise informed that you are ineligible for an
            expungement of any criminal conviction, please attach all letters,
            orders, or other documentation.
          </p>
          <TextInput
            dataKey="case.dateOfApplication"
            label="Date of Application"
          />
          <TextInput dataKey="case.dateOfDenial" label="Date of Denial" />
          <TextInput
            dataKey="case.reasonsForDenial"
            label="Reason(s) Given For Denail"
          />
        </Section>

        <Section name="7. References">
          <p className="web-form-imput">
            If you have ever served in the United States Military, Reserves, or
            National Guard, please provide the following information.
          </p>
          // References fields
        </Section>

        <Section name="8. Convictions Sought To Be Pardoned">
          <p className="web-form-imput">
            <b>
              Please list all convictions for which you seek a pardon. For each
              conviction, please submit all police reports, Pre-Sentence
              Reports, and Court Dockets.
            </b>{" "}
            Please include all requested information for each conviction. Use
            and attach extra pages if necessary. If required information is not
            available, please list all attempts and means you have used to
            obtain such information. Lack of, or failure to provide, required
            information may prevent the Board’s consideration of your
            application. Please be aware that the Board will not consider a
            pardon of Class C Misdemeanors or Infractions.
          </p>
          // Convictions Sought To Be Pardoned fields
        </Section>

        <Section name="9. Other Arrests or Convictions">
          <p className="web-form-imput">
            <b>
              Please list all other arrests or convictions. This includes
              convictions for which a pardon is not requested, any federal
              conviction, all convictions in any other state or territory, and
              any criminal charges which have been filed against you and are
              currently pending in any court.
            </b>{" "}
            Please include all requested information for each arrest or
            conviction. Use and attach extra pages if necessary. If required
            information is not included, please list all attempts and means you
            have used to obtain the information. Failure to provide required
            information may prevent the Board’s consideration of your
            application
          </p>
          // Other Arrests or Convictions fields
        </Section>

        <Section name="10. Incarceration History">
          <p className="web-form-imput">
            If you have ever been incarcerated, please list each instance or
            period of incarceration.
          </p>
          // Incarceration History fields
        </Section>

        <Section name="11. Incarceration Disciplinary History">
          <p className="web-form-imput">
            If you were ever the subject of a disciplinary violation while
            incarcerated, please list each disciplinary violation.
          </p>
          // Incarceration Disciplinary History fields
        </Section>

        <Section name="12. Letters of Recommendation">
          <p className="web-form-imput">
            Letters of recommendation in support of your application and request
            for a pardon must accompany this Application. Letters may be
            submitted from any person who knows you well and knows of the
            changes you have made to your life since your convictions. Letters
            of recommendation may be submitted from any source, including, but
            not limited to the following: Spouse, family members, neighbors,
            employers, co-workers, religious leaders, others with whom you
            attend religious services, elected officials, judges, prosecutors,
            counselors or treatment professionals, or persons with whom you
            engage in significant activities. Please attach all letters of
            recommendation to your Application.
          </p>
        </Section>

        <Section name="Oath or Affirmation">
          <p className="web-form-imput">
            By my signature herein, I swear or affirm upon my oath that all
            information included, submitted, and reported in the foregoing
            Application for Pardon, as well as in all accompanying material and
            documentation, is true and accurate.
          </p>
        </Section>

        <p className="web-form-imput">
          <b>Please Note:</b> Pardon Applications are considered only after a
          significant period of time of exemplary citizenship and demonstrable
          evidence of rehabilitation, which generally requires that at least
          five (5) years have passed since the termination or expiration of all
          criminal offenses, sentences, and supervision on probation or parole.
          Submitting a Pardon Application does not necessarily result in the
          Board scheduling a pardon hearing. The Board may deny a pardon request
          without holding a hearing. In addition, if the Board schedules a
          pardon hearing, there is no guarantee that a pardon will be granted.
        </p>

        <p className="web-form-imput">
          When completed, please return this Application, along with all other
          required documents, letters, and extra pages, to the Utah Board of
          Pardons and Parole:
          <br />
          Utah Board of Pardons and Parole Attn: Pardon Specialist 448 East
          Winchester Street Suite 300 Murray, Utah 84107
          <br />
          For questions or assistance, please call the Board at 801-261-6464 and
          ask to speak with our Pardon Specialist.
        </p>
      </FormThatPrints>
    </Scoped>
  );
}

const css = `
`;
