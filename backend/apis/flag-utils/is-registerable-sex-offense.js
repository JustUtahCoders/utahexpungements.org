exports.isRegisterableSexOffense = function isRegisterableSexOffense(
  parsedObj
) {
  let containsRegisterableSexOffense = false;

  parsedObj.charges.forEach(charge => {
    if (charge.offenseName.toLowerCase().includes("sex")) {
      containsRegisterableSexOffense = true;
    }
  });

  return containsRegisterableSexOffense;
};
