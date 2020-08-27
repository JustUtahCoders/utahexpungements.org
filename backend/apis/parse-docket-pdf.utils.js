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
    charge.offenseName = cleanLine(title ? title[2] : "");
    charge.severity = cleanLine(title ? title[3] : "");

    const disposition = charges[i].match(
      /[Plea|Disposition]+: (\w+ \d+, \d+) ((?:\w|\s)+)$/im
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
  const accountSummary = accountSummaryChunk.split(
    /(?=TOTAL)|(?=TRUST)|(?=^[A-Z\s]+ - TYPE: [\w\s]+$)/gm
  );
  let accountSummaryResult = [];

  for (let i = 1; i < accountSummary.length; i++) {
    const accountSummaryItem = {};

    const name = accountSummary[i].match(/([A-Z\s]+)/);
    const amountDue = accountSummary[i].match(/Amount Due:\s+(\d+\.\d+)/);
    const originalAmountDue = accountSummary[i].match(
      /Original Amount Due:\s+(\d+\.\d+)/
    );
    const amendedAmountDue = accountSummary[i].match(
      /Amended Amount Due:\s+(\d+\.\d+)/
    );
    const amountPaid = accountSummary[i].match(/Amount Paid:\s+(\d+\.\d+)/);
    const costType = accountSummary[i].match(/[A-Z\s]+ - TYPE: ([\w ]+)/);

    name && (accountSummaryItem.name = cleanLine(name[1]));
    amountDue && (accountSummaryItem.amountDue = cleanLine(amountDue[1]));
    originalAmountDue &&
      (accountSummaryItem.originalAmountDue = cleanLine(originalAmountDue[1]));
    amendedAmountDue &&
      (accountSummaryItem.amendedAmountDue = cleanLine(amendedAmountDue[1]));
    amountPaid && (accountSummaryItem.amountPaid = cleanLine(amountPaid[1]));
    costType && (accountSummaryItem.costType = cleanLine(costType[1]));

    accountSummaryResult.push({
      ...accountSummaryItem,
      collection: false
    });
  }

  return accountSummaryResult;
}

function cleanLine(line) {
  return line.trim().replace(/\s+/g, " ");
}
