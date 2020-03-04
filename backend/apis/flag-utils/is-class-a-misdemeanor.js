// "(b) any combination of three or more convictions
// other than for drug possession offenses
// that include two class A misdemeanor convictions,
// each of which is contained in a separate criminal episode;"

// Flag = FALSE

// Convictions = {
// class_a_misdemeanor:0,
// plain:0
// }

// Convictions per docket:
// Skip if "drug possession offense" found
// Return plain++ if felony or any other conviction found
// Return class_a_misdemeanor++ if "class A misdemeanor conviction" found

// Multiple dockets:
// Return Flag(TRUE) if TOTAL Convictions(3+) AND Convictions.class_a_misdemeanor(2+)

exports.isClassAMisdemeanor = function(multipleParsedDockets) {
  const determineClassAMisdemeanor = singleParsedDocket => {
    let convictions = {
      total: 0,
      classA: 0
    };

    singleParsedDocket.charges.forEach(charge => {
      // Fix later: skip if "drug possession offense" found

      convictions.total++;

      if (charge.severity.includes("A Misdemeanor")) {
        convictions.classA++;
      }
    });

    return convictions;
  };

  let containsClassAMisdemeanor = false;

  // Fix later: make it work with multiple dockets with loop

  let episodeConvictions = determineClassAMisdemeanor(multipleParsedDockets);

  if (episodeConvictions.total >= 3 && episodeConvictions.classA >= 2) {
    containsClassAMisdemeanor = true;
  }

  return containsClassAMisdemeanor;
};
