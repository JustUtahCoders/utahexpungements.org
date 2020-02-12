exports.isFirstDegreeFelony = function isFirstDegreeFelony(parsedObj) {
  // if (
  //   parseObj.charges.map(charge => charge.severity.toLowerCase()).includes("1st degree felony" && "amended")
  // ){
  //   return true;
  // } else if (
  //   parseObj.charges.map(charge => charge.severity.toLowerCase()).includes("1st degree felony")
  // ){
  //   return severity;
  // } else {
  //   return false
  // }

  console.log(parsedObj);

  if (
    parsedObj.charges[0].severity.toLowerCase().includes("1st degree felony") &&
    parsedObj.charges[0].severity.toLowerCase().includes("(402 amended)")
  ) {
    return true;
  } else {
    return parsedObj.charges[0].severity
      .toLowerCase()
      .includes("1st degree felony");
  }
};
