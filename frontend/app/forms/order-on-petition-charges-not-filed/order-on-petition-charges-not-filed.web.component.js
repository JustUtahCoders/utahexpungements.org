import React from "react";
import {
  courtTypeOptions,
  DistrictCourtList,
  JusticeCourtList,
  resolvedByOptions,
  serviceMethods
} from "../form-common-options/form-common-options";
import FormThatPrints from "../inputs/form-that-prints.component";
import GroupSelect from "../inputs/group-select.component.js";
import Radio from "../inputs/radio.component.js";
import Section from "../inputs/section.component";
import TextInput from "../inputs/text-input.component";

export default function OrderOnPetitionChargesNotFiled_Web({ data }) {
  return (
    <FormThatPrints>
      <Section name="1. Personal information">
        <TextInput dataKey="person.firstName" label={__("first name")} />
        <TextInput dataKey="person.middleName" label={__("middle name")} />
        <TextInput dataKey="person.lastName" label={__("last name")} />
        <TextInput dataKey="person.addressStreet" label={__("street")} />
        <TextInput dataKey="person.addressCity" label={__("city")} />
        <TextInput dataKey="person.addressState" label={__("state")} />
        <TextInput dataKey="person.addressZip" label={__("zip")} />
        <TextInput dataKey="person.phone" label={__("phone")} />
        <TextInput dataKey="person.email" label={__("email address")} />
        <TextInput dataKey="certificate.signDate" label={__("date")} />
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
        {data.case.resolvedBy === "Hearing" && (
          <TextInput dataKey="case.hearingDate" label={__("hearing date")} />
        )}
      </Section>
      
      <Section name="3. Court resolution">
        <TextInput dataKey="resolution.leaFileNumber" label={__("lea file number")} />
        <TextInput dataKey="resolution.leaName" label={__("lea name")} />
        <TextInput dataKey="resolution.date" label={__("resolution date")} />
      </Section>

      <Section name="4. Certificate of service">
        <TextInput dataKey="certificate.prosecutorFullName" label={__("prosecutor name")} />
        <Radio
          dataKey="certificate.serviceMethod"
          label={__("service method")}
          options={serviceMethods}
        />
        <TextInput dataKey="certificate.serviceAddressStreet" label={__("service address street")} />
        <TextInput dataKey="certificate.serviceAddressCity" label={__("service address city")} />
        <TextInput dataKey="certificate.serviceAddressState" label={__("service address state")} />
        <TextInput dataKey="certificate.serviceAddressZip" label={__("service address zip")} />
        <TextInput dataKey="certificate.serviceDate" label={__("service date")} />
      </Section>
    </FormThatPrints>
  );
}
