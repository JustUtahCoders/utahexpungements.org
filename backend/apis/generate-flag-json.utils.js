const { isClassAMisdemeanor } = require("./flag-utils/is-class-a-misdemeanor");
const { isClassBMisdemeanor } = require("./flag-utils/is-class-b-misdemeanor");
const {
  isDrugPosessionOffense
} = require("./flag-utils/is-drug-conviction-flag-util");
const { isDebtCollection } = require("./flag-utils/is-debt-collection-util");
const { isAutomobileHomicide } = require("./flag-utils/is-automobile-homicide");

const {
  isFirstDegreeFelony
} = require("./flag-utils/is-first-degree-felony-flag-util");

exports.generateFlagJson = function generateFlagJson(parsedObj) {
  return {
    isClassAMisdemeanor: isClassAMisdemeanor(parsedObj),
    isClassBMisdemeanor: isClassBMisdemeanor(parsedObj),
    isDrugPosessionOffense: isDrugPosessionOffense(parsedObj),
    isDebtCollection: isDebtCollection(parsedObj),
    isFirstDegreeFelony: isFirstDegreeFelony(parsedObj),
    isAutomobileHomicide: isAutomobileHomicide(parsedObj)
  };
};
