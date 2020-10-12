exports.parsePdfText = function parsePdfText(text) {
  const caseNumber = text.match(/CASE NUMBER (\d+)/i)[1];
  // Capture everything in the CHARGES section
  const chargesChunk = text.match(/CHARGES([\s\S]+?)^\s*$/im)[1];
  // Capture everything in the ACCOUNT SUMMARY section
  const accountSummaryChunk = text.match(
    /ACCOUNT SUMMARY([\s\S]+)PROCEEDINGS/im
  )[1];

  return {
    caseNumber: caseNumber,
    charges: parseCharges(chargesChunk),
    accountSummary: parseAccountSummary(accountSummaryChunk)
  };
};

function parseCharges(chargesChunk) {
  // Split CHARGES section by charge
  const charges = chargesChunk.split(/(?=Charge)/gi);
  let chargesResult = [];

  for (let i = 1; i < charges.length; i++) {
    let charge = {};

    // Capture title statute, offense name, and severity
    // Example:
    // Charge 1 - 53-3-202(1)(A) - NO VALID LICENSE - EXPIRED Class C
    // Misdemeanor
    // Result:
    // {
    //   statute: '53-3-202(1)(A)',
    //   offenseName: 'NO VALID LICENSE - EXPIRED',
    //   severity: 'Class C Misdemeanor',
    // }
    const title = charges[i].match(
      /Charge \d - ([0-9a-z()-.]+) - ([\s\S]+?)((?:Class|Not|1st|2nd|3rd)[\s\S]+?)Offense/im
    );

    charge.statute = cleanLine(title ? title[1] : "");
    charge.offenseName = cleanLine(title ? title[2] : "").toUpperCase();
    charge.severity = cleanLine(title ? title[3] : "");

    // Capture disposition and disposition date
    // Example:
    // Disposition: Month 00, 0000 Dismissed (w/o prej)
    // Result:
    // {
    //   disposition: 'Dismissed (w/o prej)',
    //   dispositionDate: 'Month 00, 0000'
    // }
    const disposition = charges[i].match(
      /[Plea|Disposition]+: (\w+ \d+, \d+) ((?:\w|\s)+(?:.*[)])?)$/im
    );
    if (disposition) {
      charge.disposition = cleanLine(disposition[2]);
      charge.dispositionDate = cleanLine(disposition[1]);
    }

    // Put charge (title and disposition items) into result array
    chargesResult.push(charge);
  }

  return chargesResult;
}

function parseAccountSummary(accountSummaryChunk) {
  // Is collection if "State Debt Collection"
  const collection = accountSummaryChunk.includes("State Debt Collection");

  // Split ACCOUNT SUMMARY sections by type
  const accountSummary = accountSummaryChunk.split(
    /(?=TOTAL)|(?=TRUST)|(?=^[A-Z\s]+ - TYPE: .+(?![a-z])$)/gm
  );
  let accountSummaryResult = [];

  for (let i = 1; i < accountSummary.length; i++) {
    const accountSummaryItem = { collection };

    // Account summary type contents
    // If the value is in text, then add to object
    // else do nothing
    // Example:
    // TRUST DETAIL
    //         Trust Description: Restitution
    //                 Recipient:  VICTIM
    //                Amount Due:          99.00
    //                   Paid In:          99.00
    //                  Paid Out:          99.00
    // Result:
    // {
    //   collection: false,
    //   name: 'Restitution',
    //   amountDue: '99.00',
    //   amountPaid: '99.00',
    //   costType: 'restitution'
    // }
    getPropFromText(
      accountSummary[i],
      "name",
      accountSummaryItem,
      /([A-Z\s]+)(?![a-z])/
    );
    getPropFromText(
      accountSummary[i],
      "amountDue",
      accountSummaryItem,
      /Amount Due:\s+([\,|\d]+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "originalAmountDue",
      accountSummaryItem,
      /Original Amount Due:\s+([\,|\d]+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "amendedAmountDue",
      accountSummaryItem,
      /Amended Amount Due:\s+([\,|\d]+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "amountPaid",
      accountSummaryItem,
      /(?:Amount Paid|Paid In):\s+([\,|\d]+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "costType",
      accountSummaryItem,
      /[A-Z\s]+ - TYPE: ([\w ]+)/
    );

    // If name is "TRUST DETAIL", change name to Trust Description, aka ex: Bail/Bond Refund
    let trustName = accountSummary[i].match(
      /Trust Description: ([\w\s]+)Recipient/
    );
    trustName = trustName ? cleanLine(trustName[1]) : "";

    if (!accountSummaryItem.costType && trustName) {
      const costType = trustName
        .toLowerCase()
        .match(/restitution|fee|interest/);

      if (accountSummaryItem.name === "TRUST DETAIL") {
        accountSummaryItem.name = trustName;
      }

      if (costType) {
        accountSummaryItem.costType = costType[0];
      }
    }

    accountSummaryResult.push(accountSummaryItem);
  }

  return accountSummaryResult;
}

// Remove any white spaces
function cleanLine(line) {
  return line.trim().replace(/\s+/g, " ");
}

// Return nothing if there is no extracted value
function getPropFromText(sourceText, propName, resultObj, regex) {
  var extractedValue = sourceText.match(regex);

  if (extractedValue) {
    var cleanExtractedValue = cleanLine(extractedValue[1]);
    if (propName === "amountDue" || propName === "costType") {
      cleanExtractedValue = cleanExtractedValue.toLowerCase();
    }
    resultObj[propName] = cleanExtractedValue;
    return cleanExtractedValue;
  }
}
