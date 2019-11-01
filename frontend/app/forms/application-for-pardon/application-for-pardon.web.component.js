import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import { previouslyAppliedOptions } from "../form-common-options/form-common-options.js";
import Radio from "../inputs/radio.component.js";
import TextArea from "../inputs/text-area.component.js";

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
            dataKey="person.previouslyApplied"
            label={__("previously applied")}
            options={previouslyAppliedOptions}
          />

          <p className="web-form-input">
            If yes, please provide the date of the application, the outcome of
            the application, list any conviction(s) pardoned, and attach a copy
            of the application and the Pardon Certificate.
          </p>
          {data.person.previouslyApplied && (
            <TextArea
              dataKey="person.explaination" // needs more specific name
              label={__("previously please explain")}
            />
          )}
        </Section>
        <Section name="3. Family History">
          <p className="web-form-input">
            If married, please provide the following information for your spouse
          </p>
          <TextInput
            dataKey="spouse.firstName"
            label={__("first name spouse")}
          />
          <TextInput
            dataKey="spouse.middleName"
            label={__("middle name spouse")}
          />
          <TextInput dataKey="spouse.lastName" label={__("last name spouse")} />
          <TextInput dataKey="spouse.addressStreet" label={__("street")} />
          <TextInput dataKey="spouse.addressCity" label={__("city")} />
          <TextInput dataKey="spouse.addressState" label={__("state")} />
          <TextInput dataKey="spouse.addressZip" label={__("zip")} />
          <TextInput dataKey="spouse.homePhone" label={__("home phone")} />
          <TextInput dataKey="spouse.dayPhone" label={__("day phone")} />
          <TextInput dataKey="spouse.email" label={__("email address")} />
          // children of person
        </Section>
        <Section name="4. Employment History">
          <p className="web-form-imput">
            Beginning with your current or most recent, please list your last
            five places of employment, and provide the requested information for
            each.
          </p>
          // Employment History
        </Section>

        <Section name="5. Military History">
          <p className="web-form-imput">
            If you have ever served in the United States Military, Reserves, or
            National Guard, please provide the following information.
          </p>
          // Military History
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
          // Expungement History
        </Section>

        <Section name="7. References">
          <p className="web-form-imput">
            If you have ever served in the United States Military, Reserves, or
            National Guard, please provide the following information.
          </p>
          // References
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
          // References
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
          // References
        </Section>

        <Section name="10. Incarceration History">
          <p className="web-form-imput">
            If you have ever been incarcerated, please list each instance or
            period of incarceration.
          </p>
          // References
        </Section>

        <Section name="11. Incarceration Disciplinary History">
          <p className="web-form-imput">
            If you were ever the subject of a disciplinary violation while
            incarcerated, please list each disciplinary violation.
          </p>
          // References
        </Section>

        <Section name="11. Incarceration Disciplinary History">
          <p className="web-form-imput">
            If you were ever the subject of a disciplinary violation while
            incarcerated, please list each disciplinary violation.
          </p>
          // References
        </Section>
      </FormThatPrints>
    </Scoped>
  );
}

const css = `
`;
