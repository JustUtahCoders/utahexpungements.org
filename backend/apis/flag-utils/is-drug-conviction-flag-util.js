exports.isDrugPosessionOffense = function isDrugPosessionOffense(parsedObj) {
  console.log("this is parsedObj.offenseName", parsedObj.off);
  //return true;

  return parsedObj.charges[0].offenseName.toLowerCase().includes("drug");
};
