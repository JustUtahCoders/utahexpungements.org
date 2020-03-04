exports.isChildAbuse = function isChildAbuse(parsedObj) {
  let containsChildAbuse = false;

  parsedObj.charges.forEach(charge => {
    if (charge.offenseName.toLowerCase().includes("child")) {
      containsChildAbuse = true;
    }
  });

  return containsChildAbuse;
};
