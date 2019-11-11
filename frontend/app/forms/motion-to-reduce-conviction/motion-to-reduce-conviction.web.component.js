import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import Section from "../inputs/section.component.js";
import TextInput from "../inputs/text-input.component";
import Select from "../inputs/select.component.js";
import Radio from "../inputs/radio.component.js";
import GroupSelect from "../inputs/group-select.component.js";
import {
  petitionerRepresentativeOptions,
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList
} from "../form-common-options/form-common-options";

export default function MotionToReduceConviction_Web({ data }) {
  const [currentConvictionDegree, setCurrentConvictionDegree] = React.useState(
    ""
  );
  const [
    reducedConvictionDegreeOptions,
    setReducedConvictionDegreeOptions
  ] = React.useState(defaultConvictionDegreeOptions);

  React.useEffect(() => {
    setCurrentConvictionDegree(data.case.convictionDegree);
  }, [data.case.convictionDegree]);
  React.useEffect(() => {
    if (currentConvictionDegree) {
      setReducedConvictionDegreeOptions(
        reducedConvictionDegreeOptionsFromCurrentConviction(
          currentConvictionDegree
        )
      );
    }
  }, [currentConvictionDegree]);

  return (
    <FormThatPrints>
      <Section name="1. Personal Information">
        <TextInput dataKey="person.firstName" label={__("first name")} />
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
        <Select
          dataKey="person.petitionerRepresentative"
          label={__("are you filling this out for yourself")}
          options={petitionerRepresentativeOptions}
        />
      </Section>
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
      <TextInput dataKey="case.plaintiff" label={__("plaintiff")} />
      <TextInput dataKey="case.defendant" label={__("defendant")} />
      <Select
        dataKey="case.convictionDegree"
        label={__("degree of your criminal conviction")}
        options={defaultConvictionDegreeOptions}
      />
      <Select
        dataKey="case.reducedConvictionDegree"
        label={__("requesting court to reduce my convition to")}
        options={reducedConvictionDegreeOptions}
      />
    </FormThatPrints>
  );
}

const defaultConvictionDegreeOptions = [
  { label: "First Degree", value: "First Degree" },
  { label: "Second Degree", value: "Second Degree" },
  { label: "Third Degree", value: "Third Degree" },
  { label: "Class A", value: "Class A" },
  { label: "Class B", value: "Class B" },
  { label: "Class C", value: "Class C" }
];

function reducedConvictionDegreeOptionsFromCurrentConviction(conviction) {
  switch (conviction) {
    case "First Degree":
      return [
        { label: "Second Degree", value: "Second Degree" },
        { label: "Third Degree", value: "Third Degree" }
      ];
    case "Second Degree":
      return [
        { label: "Third Degree", value: "Third Degree" },
        { label: "Class A", value: "Class A" }
      ];
    case "Third Degree":
      return [
        { label: "Class A", value: "Class A" },
        { label: "Class B", value: "Class B" }
      ];
    case "Class A":
      return [
        { label: "Class B", value: "Class B" },
        { label: "Class C", value: "Class C" }
      ];
    case "Class B":
      return [
        { label: "Class C", value: "Class C" },
        { label: "Infraction", value: "Infraction" }
      ];
    case "Class C":
      return [{ label: "Infraction", value: "Infraction" }];
    default:
      return defaultConvictionDegreeOptions;
  }
}
