exports.isAutomobileHomicide = function(parsedObj) {
  //Check if offense is a Automobile Homicide
  let automobileHomicide = false;
  parsedObj.charges.forEach(val => {
    if (
      val.offenseName.toLowerCase().includes("automobile homicide") &&
      val.offenseName.toLowerCase().includes("dui")
    ) {
      automobileHomicide = true;
    }
  });
  return automobileHomicide;
};
