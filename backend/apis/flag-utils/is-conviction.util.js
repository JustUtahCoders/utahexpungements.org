exports.isConviction = function(parsedObj) {
  if (containsDisposition(parsedObj)) {
    return false;
  }
  // TODO: check if dismissed or transferred
};

function containsDisposition(parsedObj) {
  return parsedObj.charges
    .map(charge => {
      return charge.hasOwnProperty("disposition");
    })
    .includes(false);
}
