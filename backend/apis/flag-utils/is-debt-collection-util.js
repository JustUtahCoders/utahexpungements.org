exports.isDebtCollection = function(parsedObj) {
  return parsedObj.accountSummary.map(x => x.collection).includes(true);
};
