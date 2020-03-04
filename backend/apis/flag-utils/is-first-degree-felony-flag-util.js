exports.isFirstDegreeFelony = function isFirstDegreeFelony(parsedObj) {
  const felonies = parsedObj.charges.filter(
    charge =>
      charge.severity.toLowerCase().includes("1st degree felony") &&
      !charge.severity.toLowerCase().includes("amended")
  );
  return !!felonies.length;
};
