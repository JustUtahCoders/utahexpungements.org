const sectionHeaderRegex = /^([A-Z][A-Z ]+)/;

exports.parsePdfText = function parsePdfText(text) {
  const lines = text.split("\n");
  const sections = [];
  let foundCaseNumberSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = sectionHeaderRegex.exec(line);
    if (match) {
      addSection(match[1].trim(), i);
    }
  }

  function addSection(name, lineNumber) {
    const shouldAdd = name !== "CASE NUMBER" || !foundCaseNumberSection;
    if (name === "CASE NUMBER") {
      foundCaseNumberSection = true;
    }
    if (shouldAdd) {
      sections.push({ name, lineNumber });
    }
  }

  return {
    caseNumber: parseCaseNumber(lines, sections),
    charges: parseCharges(lines, sections),
    accountSummary: parseAccountSummary(lines, sections)
  };
};

function parseCaseNumber(lines, sections) {
  // There are multiple CASE NUMBER sections, but hopefully are all the same,
  // so we can just use the first one??
  const section = sections.find(section => section.name === "CASE NUMBER");

  if (!section) {
    // we apparently don't have a case number
    return null;
  }

  let caseNumber = lines[section.lineNumber];
  caseNumber = caseNumber.replace("CASE NUMBER ", "");
  caseNumber = caseNumber.slice(
    0,
    caseNumber.indexOf(" ") || caseNumber.length
  );
  return caseNumber;
}

function parseCharges(lines, sections) {
  const charges = [];

  let lastLineWasCharge = false;

  function addDispositionToCharges(line) {
    const lastCharge = charges.length > 0 ? charges[charges.length - 1] : null;

    if (lastLineWasCharge) {
      lastLineWasCharge = false;
      lastCharge.description += ` ${line}`;
    } else if (line.startsWith("Charge")) {
      lastLineWasCharge = true;
      const [chargeNumber, statute, description] = line.split(" - ");
      charges.push({
        statute,
        description
      });
    } else if (line.startsWith("Disposition:")) {
      const numeric = /\d/;
      let lastNumericIndex = 0;
      const trimmed = line.replace("Disposition: ", "");
      for (let i = 0; i < trimmed.length; i++) {
        if (numeric.test(trimmed[i])) {
          lastNumericIndex = i;
        }
      }
      lastCharge.disposition = trimmed.slice(lastNumericIndex + 1).trim();
      lastCharge.dispositionDate = trimmed
        .slice(0, lastNumericIndex + 1)
        .trim();
    }
  }

  walkSection(lines, sections, "CHARGES", addDispositionToCharges);

  return charges;
}

function parseAccountSummary(lines, sections) {
  let currentProp;
  let currentSubProp;
  let currentObj = {};

  function addAccounts(line) {
    const inlineHeading = /([A-Z][A-Z ]+)/g;
    const separator = /.:/g;
    const skipLines = ["", "ACCOUNT SUMMARY"];
    const rubbish = [
      /CASE NUMBER/g,
      /[__]+/g,
      /Printed/g,
      /Page.+of/g,
      /TRUST DETAIL/g
    ];
    const filtered = rubbish.filter(regex => {
      const result = regex.exec(line);
      return regex.lastIndex > 0;
    });

    const removeSpace = text => {
      const test = text.replace(".", "").replace("/", "_");
      const total = test.includes(" ") && test.match(/\s/g).length;

      return +total > 1
        ? removeSpace(test.replace(" ", "_"))
        : test.replace(" ", "_");
    };

    if (!skipLines.includes(line)) {
      if (filtered.length === 0) {
        if (line.match(separator)) {
          const propPart = line.slice(0, line.indexOf(":"));
          const valuePart = line.slice(line.indexOf(":") + 2);
          if (propPart.match(inlineHeading)) {
            if (propPart.match(/[a-z]/)) {
              const lastCap = /.[A-Z][a-z]/;
              const heading = removeSpace(
                propPart.slice(0, propPart.search(lastCap))
              );
              const newProp = removeSpace(
                propPart.slice(propPart.search(lastCap) + 1)
              );
              currentProp = removeSpace(heading);
              currentSubProp = null;
              currentObj[currentProp] = {
                [removeSpace(newProp)]: valuePart
              };
            } else {
              currentObj[currentProp] = {
                ...currentObj[currentProp],
                [removeSpace(valuePart)]: {}
              };
              currentSubProp = removeSpace(valuePart);
            }
          } else if (line.includes("Trust Description")) {
            currentObj[currentProp] = {
              ...currentObj[currentProp],
              [removeSpace(valuePart)]: {}
            };
            currentSubProp = removeSpace(valuePart);
          } else {
            if (currentSubProp) {
              currentObj[currentProp][currentSubProp] = {
                ...currentObj[currentProp][currentSubProp],
                [removeSpace(propPart)]: valuePart
              };
            } else {
              currentObj[currentProp] = {
                ...currentObj[currentProp],
                [removeSpace(propPart)]: valuePart
              };
            }
          }
        }
      }
    }
  }

  walkSection(lines, sections, "ACCOUNT SUMMARY", addAccounts);

  return currentObj;
}

function walkSection(lines, sections, name, walk) {
  const sectionIndex = sections.findIndex(section => section.name === name);

  if (sectionIndex < 0) {
    // no section with that name
    return;
  }

  const startLine = sections[sectionIndex].lineNumber;
  const endLine =
    sectionIndex + 1 < sections.length
      ? sections[sectionIndex + 1].lineNumber
      : lines.length;

  for (let i = startLine; i < endLine; i++) {
    walk(lines[i].trim());
  }
}
