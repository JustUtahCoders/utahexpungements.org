exports.parsePdfText = function parsePdfText(text) {
  const caseNumber = text.match(/CASE NUMBER (\d+)/i)[1];
  const chargesChunk = text.match(/CHARGES([\s\S]+?)^\s*$/im)[1];
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
  const charges = chargesChunk.split(/(?=Charge)/gi);
  let chargesResult = [];

  for (let i = 1; i < charges.length; i++) {
    let charge = {};

    const title = charges[i].match(
      /Charge \d - ([0-9a-z()-.]+) - ([\s\S]+?)((?:Class|Not|1st|2nd|3rd)[\s\S]+?)Offense/im
    );

    charge.statute = cleanLine(title ? title[1] : "");
    charge.offenseName = cleanLine(title ? title[2] : "").toUpperCase();
    charge.severity = cleanLine(title ? title[3] : "");

    const disposition = charges[i].match(
      /[Plea|Disposition]+: (\w+ \d+, \d+) ((?:\w|\s)+(?:.*[)])?)$/im
    );
    if (disposition) {
      charge.disposition = cleanLine(disposition[2]);
      charge.dispositionDate = cleanLine(disposition[1]);
    }

    chargesResult.push(charge);
  }

  return chargesResult;
}

function parseAccountSummary(accountSummaryChunk) {
  const collection = accountSummaryChunk.includes("State Debt Collection");

  const accountSummary = accountSummaryChunk.split(
    /(?=TOTAL)|(?=TRUST)|(?=^[A-Z\s]+ - TYPE: .+(?![a-z])$)/gm
  );
  let accountSummaryResult = [];

  for (let i = 1; i < accountSummary.length; i++) {
    const accountSummaryItem = { collection };

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
      /Amount Due:\s+(\d+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "originalAmountDue",
      accountSummaryItem,
      /Original Amount Due:\s+(\d+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "amendedAmountDue",
      accountSummaryItem,
      /Amended Amount Due:\s+(\d+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "amountPaid",
      accountSummaryItem,
      /(?:Amount Paid|Paid In):\s+(\d+\.\d+)/
    );
    getPropFromText(
      accountSummary[i],
      "costType",
      accountSummaryItem,
      /[A-Z\s]+ - TYPE: ([\w ]+)/
    );

    let trustName = accountSummary[i].match(
      /Trust Description: ([\w\s]+)Recipient/
    );
    trustName = trustName ? cleanLine(trustName[1]) : "";

    if (!accountSummaryItem.costType && trustName) {
      const costType = trustName
        .toLowerCase()
        .match(/restitution|fee|interest/)[0];

      if (accountSummaryItem.name === "TRUST DETAIL") {
        accountSummaryItem.name = trustName;
      }

      if (costType) {
        accountSummaryItem.costType = costType;
      }
    }

    accountSummaryResult.push(accountSummaryItem);
  }

  return accountSummaryResult;
}

function cleanLine(line) {
  return line.trim().replace(/\s+/g, " ");
}

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
