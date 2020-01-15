const {
  isDrugPosessionOffense
} = require("./flag-utils/is-drug-conviction-flag-util");

exports.generateFlagJson = function generateFlagJson(parsedObj) {
  console.log("parsedObj", parsedObj);
  return {
    isDrugPosessionOffense: isDrugPosessionOffense(parsedObj)
  };
};
