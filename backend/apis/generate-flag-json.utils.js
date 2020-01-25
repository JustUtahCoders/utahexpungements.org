const {
  isDrugPosessionOffense
} = require("./flag-utils/is-drug-conviction-flag-util");

const {
  isFirstDegreeFelony
} = require("./flag-utils/is-first-degree-felony-flag-util");

exports.generateFlagJson = function generateFlagJson(parsedObj) {
  return {
    isDrugPosessionOffense: isDrugPosessionOffense(parsedObj),
    isFirstDegreeFelony: isFirstDegreeFelony(parsedObj)
  };
};
