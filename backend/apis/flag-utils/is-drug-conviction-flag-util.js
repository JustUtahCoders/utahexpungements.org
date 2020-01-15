exports.isDrugPosessionOffense = function isDrugPosessionOffense(parsedObj) {
  return parsedObj.charges[0].offenseName.toLowerCase().includes("drug");
};
