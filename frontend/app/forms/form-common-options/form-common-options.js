import DistrictCourtList from "./DistrictCourtList";
import JusticeCourtList from "./JusticeCourtList";

export { DistrictCourtList, JusticeCourtList };

export const petitionerRepresentativeOptions = [
  { label: "Yes. I am the petitioner.", value: "petitioner" },
  {
    label: "No. I am an attorney representing the petitioner.",
    value: "attorney"
  }
];

export const petitionerRepresentativeOptionsCOE = [
  {
    label: `Yes. I'd like documents to be sent to someone besides myself`,
    value: "someone-else-is-recipient"
  },
  {
    label: `No. I'd like documents to be sent to me directly`,
    value: "petitioner-is-recipient"
  }
];

export const countyOptions = [
  { label: "Beaver", value: "Beaver" },
  { label: "Box Elder", value: "Box Elder" },
  { label: "Cache", value: "Cache" },
  { label: "Carbon", value: "Carbon" },
  { label: "Daggett", value: "Daggett" },
  { label: "Davis", value: "Davis" },
  { label: "Duchesne", value: "Duchesne" },
  { label: "Emery", value: "Emery" },
  { label: "Garfield", value: "Garfield" },
  { label: "Grand", value: "Grand" },
  { label: "Iron", value: "Iron" },
  { label: "Juab", value: "Juab" },
  { label: "Kane", value: "Kane" },
  { label: "Millard", value: "Millard" },
  { label: "Morgan", value: "Morgan" },
  { label: "Piute", value: "Piute" },
  { label: "Rich", value: "Rich" },
  { label: "Salt Lake", value: "Salt Lake" },
  { label: "San Juan", value: "San Juan" },
  { label: "Sanpete", value: "Sanpete" },
  { label: "Sevier", value: "Sevier" },
  { label: "Summit", value: "Summit" },
  { label: "Tooele", value: "Tooele" },
  { label: "Uintah", value: "Uintah" },
  { label: "Utah", value: "Utah" },
  { label: "Wasatch", value: "Wasatch" },
  { label: "Washington", value: "Washington" },
  { label: "Wayne", value: "Wayne" },
  { label: "Weber", value: "Weber" }
];

export const courtTypeOptions = [
  { label: "District Court", value: "District" },
  { label: "Justice Court", value: "Justice" }
];

export const resolvedByOptions = [
  { label: "Pleadings", value: "Pleadings" },
  { label: "Hearing", value: "Hearing" }
];

export const pryingQuestionOptions = [
  {
    label: "I have not been diagnosed as having a substance abuse addiction.",
    value: "no"
  },
  {
    label:
      "I have been diagnosed as having a substance abuse addiction and I am managing my addiction by:",
    value: "yes"
  }
];

export function getJudicialDistrict(courtAddress, courtType) {
  const courtList =
    courtType === "District" ? DistrictCourtList : JusticeCourtList;
  const court = courtList.find(court =>
    court.options.some(option => option.value === courtAddress)
  );
  return court
    ? getJudicialDistrictFromCounty(court.name.replace(" County", ""))
    : "";
}

export function getCounty(courtAddress, courtType) {
  const courtList =
    courtType === "District" ? DistrictCourtList : JusticeCourtList;
  const court = courtList.find(court =>
    court.options.some(option => option.value === courtAddress)
  );
  return court ? court.name.replace(" County", "") : "";
}

function getJudicialDistrictFromCounty(value) {
  switch (value) {
    case "Box Elder":
    case "Rich":
    case "Cache":
      return "First";
      break;
    case "Davis":
    case "Morgan":
    case "Weber":
      return "Second";
      break;
    case "Salt Lake":
    case "Summit":
    case "Tooele":
      return "Third";
      break;
    case "Juab":
    case "Millard":
    case "Utah":
    case "Wasatch":
      return "Fourth";
      break;
    case "Beaver":
    case "Iron":
    case "Washington":
      return "Fifth";
      break;
    case "Garfield":
    case "Kane":
    case "Piute":
    case "Sanpete":
    case "Sevier":
    case "Wayne":
      return "Sixth";
      break;
    case "Carbon":
    case "Emery":
    case "Grand":
    case "San Juan":
      return "Seventh";
      break;
    case "Daggett":
    case "Duchesne":
    case "Uintah":
      return "Eighth";
      break;
  }
}
