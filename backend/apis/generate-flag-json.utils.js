const { isClassBMisdemeanor } = require("./flag-utils/is-class-b-misdemeanor");
const {
  isDrugPosessionOffense
} = require("./flag-utils/is-drug-conviction-flag-util");
const { isDebtCollection } = require("./flag-utils/is-debt-collection-util");
const isAutomobileHomicide = require("./flag-utils/is-automobile-homicide");

exports.generateFlagJson = function generateFlagJson(parsedObj) {
  return {
    isClassBMisdemeanor: isClassBMisdemeanor(parsedObj),
    isDrugPosessionOffense: isDrugPosessionOffense(parsedObj),
    isDebtCollection: isDebtCollection(parsedObj),
    isAutomobileHomicide: isAutomobileHomicide(parsedObj)
  };
};
