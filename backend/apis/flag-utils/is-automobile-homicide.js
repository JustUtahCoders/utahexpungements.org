exports.isAutomobileHomicide = function(parsedObj) {
  //Check if offense is a Automobile Homicide
  let automobileHomicide = false;
  parsedObj.charges.forEach(val => {
    if (
      val.offenseName.includes("AUTOMOBILE HOMICIDE") &&
      val.offenseName.includes("DUI")
    ) {
      automobileHomicide = true;
    }
  });
  return automobileHomicide;
};
