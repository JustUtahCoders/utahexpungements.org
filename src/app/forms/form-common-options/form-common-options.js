export const formCommonOptions = {
  JudicialDistrict: null,
  petitionerRepresentativeOptions: [
    { label: "Yes. I am the petitioner.", value: "petitioner" },
    {
      label: "No. I am an attorney representing the petitioner.",
      value: "attorney"
    }
  ],
  countyOptions: [
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
  ],
  courtTypeOptions: [
    { label: "District Court", value: "District" },
    { label: "Justice Court", value: "Justice" }
  ],
  getJudicialDistrictFromCounty: function(value) {
    switch (value) {
      case "Box Elder":
      case "Rich":
      case "Cache":
        this.JudicialDistrict = "First";
        break;
      case "Davis":
      case "Morgan":
      case "Weber":
        this.JudicialDistrict = "Second";
        break;
      case "Salt Lake":
      case "Summit":
      case "Tooele":
        this.JudicialDistrict = "Third";
        break;
      case "Juab":
      case "Millard":
      case "Utah":
      case "Wasatch":
        this.JudicialDistrict = "Fourth";
        break;
      case "Beaver":
      case "Iron":
      case "Washington":
        this.JudicialDistrict = "Fifth";
        break;
      case "Garfield":
      case "Kane":
      case "Piute":
      case "Sanpete":
      case "Sevier":
      case "Wayne":
        this.JudicialDistrict = "Sixth";
        break;
      case "Carbon":
      case "Emery":
      case "Grand":
      case "San Juan":
        this.JudicialDistrict = "Seventh";
        break;
      case "Daggett":
      case "Duchesne":
      case "Uintah":
        this.JudicialDistrict = "Eighth";
        break;
    }
    return this.JudicialDistrict;
  }
};

// export const petitionerRepresentativeOptions = [
//     { label: "Yes. I am the petitioner.", value: "petitioner" },
//     {
//         label: "No. I am an attorney representing the petitioner.",
//         value: "attorney"
//     }
// ];

// export const countyOptions = [
//     { label: "Beaver", value: "Beaver" },
//     { label: "Box Elder", value: "Box Elder" },
//     { label: "Cache", value: "Cache" },
//     { label: "Carbon", value: "Carbon" },
//     { label: "Daggett", value: "Daggett" },
//     { label: "Davis", value: "Davis" },
//     { label: "Duchesne", value: "Duchesne" },
//     { label: "Emery", value: "Emery" },
//     { label: "Garfield", value: "Garfield" },
//     { label: "Grand", value: "Grand" },
//     { label: "Iron", value: "Iron" },
//     { label: "Juab", value: "Juab" },
//     { label: "Kane", value: "Kane" },
//     { label: "Millard", value: "Millard" },
//     { label: "Morgan", value: "Morgan" },
//     { label: "Piute", value: "Piute" },
//     { label: "Rich", value: "Rich" },
//     { label: "Salt Lake", value: "Salt Lake" },
//     { label: "San Juan", value: "San Juan" },
//     { label: "Sanpete", value: "Sanpete" },
//     { label: "Sevier", value: "Sevier" },
//     { label: "Summit", value: "Summit" },
//     { label: "Tooele", value: "Tooele" },
//     { label: "Uintah", value: "Uintah" },
//     { label: "Utah", value: "Utah" },
//     { label: "Wasatch", value: "Wasatch" },
//     { label: "Washington", value: "Washington" },
//     { label: "Wayne", value: "Wayne" },
//     { label: "Weber", value: "Weber" }
// ];

// export const courtTypeOptions = [
//     { label: "District Court", value: "District" },
//     { label: "Justice Court", value: "Justice" }
// ];

// export function judicial(value) {
//     var JudicialDistrict = "";
//     switch (value) {
//         case "Box Elder":
//         case "Rich":
//         case "Cache":
//             JudicialDistrict = "First";
//             break;
//         case "Davis":
//         case "Morgan":
//         case "Weber":
//             JudicialDistrict = "Second";
//             break;
//         case "Salt Lake":
//         case "Summit":
//         case "Tooele":
//             JudicialDistrict = "Third";
//             break;
//         case "Juab":
//         case "Millard":
//         case "Utah":
//         case "Wasatch":
//             JudicialDistrict = "Fourth";
//             break;
//         case "Beaver":
//         case "Iron":
//         case "Washington":
//             JudicialDistrict = "Fifth";
//             break;
//         case "Garfield":
//         case "Kane":
//         case "Piute":
//         case "Sanpete":
//         case "Sevier":
//         case "Wayne":
//             JudicialDistrict = "Sixth";
//             break;
//         case "Carbon":
//         case "Emery":
//         case "Grand":
//         case "San Juan":
//             JudicialDistrict = "Seventh";
//             break;
//         case "Daggett":
//         case "Duchesne":
//         case "Uintah":
//             JudicialDistrict = "Eighth";
//             break;
//     }
//     return JudicialDistrict;
// }
