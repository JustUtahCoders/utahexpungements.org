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
    const title = charges[i].match(
      /Charge \d - ([0-9a-z()-.]+) - ([\s\S]+?)((?:Class|Not)[\s\S]+?)Offense/im
    );
    const disposition = charges[i].match(
      /Disposition: (\w+ \d+, \d+) ((?:\w|\s)+)$/im
    );

    chargesResult.push({
      statute: cleanLine(title[1]),
      disposition: cleanLine(disposition[2]),
      dispositionDate: cleanLine(disposition[1]),
      offenseName: cleanLine(title[2]),
      severity: cleanLine(title[3])
    });
  }

  return chargesResult;
}

function parseAccountSummary(accountSummaryChunk) {
  const accountSummary = accountSummaryChunk.split(
    /(?=^[A-Z\s]+ - TYPE: [\w\s]+$)/gm
  );
  let accountSummaryResult = [];

  for (let i = 1; i < accountSummary.length; i++) {
    accountSummaryResult.push({
      name: cleanLine(
        (accountSummary[i].match(/([A-Z\s]+)/) || ["default", "default"])[1]
      ),
      amountDue: (accountSummary[i].match(/Amount Due:\s+(\d+\.\d+)/) || [
        "default",
        0.0
      ])[1],
      originalAmountDue: (accountSummary[i].match(
        /Original Amount Due:\s+(\d+\.\d+)/
      ) || ["default", 0.0])[1],
      amendedAmountDue: (accountSummary[i].match(
        /Amended Amount Due:\s+(\d+\.\d+)/
      ) || ["default", 0.0])[1],
      amountPaid: (accountSummary[i].match(/Amount Paid:\s+(\d+\.\d+)/) || [
        "default",
        0.0
      ])[1],
      costType: cleanLine(
        (accountSummary[i].match(/[A-Z\s]+ - TYPE: ([\w ]+)/) || [
          "default",
          "default"
        ])[1]
      ),
      collection: false
    });
  }

  return accountSummaryResult;
}

function cleanLine(line) {
  return line.trim().replace(/\s+/g, " ");
}
