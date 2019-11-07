const { file } = require("./docket-pdf-test-files/normal-docket-pdf");
const { accountSummary } = require("./docket-pdf-test-files/account-summary");
const { stateCollection } = require("./docket-pdf-test-files/state-collection");
const { parsePdfText } = require("./parse-docket-pdf.utils");

describe("normal docket pdf file", () => {
  let parsedText;

  beforeEach(() => {
    parsedText = parsePdfText(file);
  });

  test("caseNumber is '000000000'", () => {
    expect(parsedText.caseNumber).toBe("000000000");
  });

  test("charges has correct values", () => {
    let actual0 = parsedText.charges[0];
    let actual1 = parsedText.charges[1];

    expect(actual0.statute).toBe("53-3-202(1)(A)");
    expect(actual0.description).toBe("NO VALID LICENSE Misdemeanor");
    expect(actual0.disposition).toBe("Dismissed (w/o prej)");
    expect(actual0.dispositionDate).toBe("Month 00, 0000");

    expect(actual1.statute).toBe("41-6A-601");
    expect(actual1.description).toBe(
      "SPEEDING 70 in a 65 Class C Misdemeanor Offense Date: Month 00, 0000"
    );
    expect(actual1.disposition).toBe("Dismissed (w/o prej)");
    expect(actual1.dispositionDate).toBe("Month 00, 0000");
  });
});

describe("correctly and completely parses ACCOUNT SUMMARY section", () => {
  let parsedSection, parsedText, parsedCollection;
  beforeEach(() => {
    parsedSection = parsePdfText(accountSummary);
    parsedText = parsePdfText(file);
    parsedCollection = parsePdfText(stateCollection);
  });

  test("always adds accountSummary property to return an array", () => {
    expect(parsedSection.accountSummary.length).toBeGreaterThan(0);
    expect(parsedCollection.accountSummary.length).toBeGreaterThan(0);
    expect(parsedText.accountSummary.length).toBe(0);
  });

  test("The accountSummary array includes fines and their associated amountDue and amountPaid", () => {
    const findFines1 = parsedSection.accountSummary.filter(item => {
      return item.name === "REVENUE DETAIL - TYPE: FINE";
    });
    const findFines2 = parsedCollection.accountSummary.filter(item => {
      return item.name === "REVENUE DETAIL - TYPE: FINE";
    });
    expect(findFines1[0].amountDue).toBe("680.00");
    expect(findFines1[0].amountPaid).toBe("680.00");
    expect(findFines2[0].originalAmountDue).toBe("600.00");
    expect(findFines2[0].amendedAmountDue).toBe("0.00");
    expect(findFines2[0].amountDue).toBe("0.00");
    expect(findFines2[0].amountPaid).toBe("0.00");
  });

  test("The accountSummary array includes restitution info", () => {
    const findRestitution = parsedSection.accountSummary.filter(item => {
      return item.costType;
    });
    expect(findRestitution[0].amountDue).toBe("99.00");
    expect(findRestitution[0].amountPaid).toBe("99.00");
  });

  test("If charge was sent to State Debt Collection, then costType = state debt collection", () => {
    const findCollection = parsedCollection.accountSummary.filter(item => {
      return item.collection;
    });
    const findSection = parsedSection.accountSummary.filter(item => {
      return item.collection;
    });
    expect(findCollection.length).toBeGreaterThan(0);
    expect(findSection.length).toBe(0);
  });
});
