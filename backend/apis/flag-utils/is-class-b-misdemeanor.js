exports.isClassBMisdemeanor = function(parsedObj) {
  // check if at least one charge is a Class B Misdemeanor
  let containsClassBMisdemeanor = false;

  parsedObj.charges.forEach(x => {
    if (x.severity.includes("B Misdemeanor")) {
      containsClassBMisdemeanor = true;
    }
  });

  return containsClassBMisdemeanor;
};
