exports.generateFlagJson = function generateFlagJson(parsedObj) {
  console.log("parsedObj", parsedObj);
  return {
    isDrugPosessionOffense: isDrugPosessionOffense(parsedObj),
    isSentToDebtCollection: isSentToDebtCollection(parsedObj)
  };
};

function isDrugPosessionOffense(parsedObj) {
  console.log("this is parsedObj.offenseName", parsedObj.off);
  //return true;

  return parsedObj.charges[0].offenseName.toLowerCase().includes("drug");
}

function isSentToDebtCollection(parsedObj) {
  return parsedObj.accountSummary[0].collection;
}
