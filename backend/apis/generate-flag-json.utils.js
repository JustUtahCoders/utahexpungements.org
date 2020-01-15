const {
  isDrugPosessionOffense
} = require("./flag-utils/is-drug-conviction-flag-util");

exports.generateFlagJson = function generateFlagJson(parsedObj) {
  return {
    isDrugPosessionOffense: isDrugPosessionOffense(parsedObj)
  };
};
