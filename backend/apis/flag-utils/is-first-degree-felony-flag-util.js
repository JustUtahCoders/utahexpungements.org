exports.isFirstDegreeFelony = function isFirstDegreeFelony(parsedObj) {
  if (
    parsedObj.charges
      .map(charge => charge.severity.toLowerCase())
      .includes("1st degree felony")
  ) {
    if (
      parsedObj.charges
        .map(charge => charge.severity.toLowerCase())
        .includes("amended")
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
