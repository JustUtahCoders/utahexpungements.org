exports.isClassBMisdemeanor = function(parsedObj) {
  // Determine if the individual has at least 4 convictions where 3 are Misdemeanor B's
  // must have at least 4 convictions
  if (parsedObj.charges.length < 4) {
    return false;
  }
  let numOfClassBMisdemeanors;
  // 3 or more of the convictions must be Class B Misdemeanors
  for (let i = 0; i++; i < parsedObj.charges.length) {
    if (parsedObj.charges[i].includes("B Misdemeanor")) {
      numOfClassBMisdemeanors++;
    }
  }
  return numOfClassBMisdemeanors >= 3;
};
