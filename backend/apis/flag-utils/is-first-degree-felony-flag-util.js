exports.isFirstDegreeFelony = function isFirstDegreeFelony(parsedObj) {
  if (
    parsedObj.charges[0].severity.toLowerCase().includes("1st degree felony") &&
    parsedObj.charges[0].severity.toLowerCase().includes("(amended)")
  ) {
    return true;
  } else {
    return parsedObj.charges[0].severity
      .toLowerCase()
      .includes("1st degree felony");
  }
};
