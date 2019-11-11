const { file } = require("./docket-pdf-test-files/normal-docket-pdf");
const {
  accountSummary
} = require("./docket-pdf-test-files/large-account-summary");
const {
  stateCollection
} = require("./docket-pdf-test-files/state-collection-case");
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

  test("always adds accountSummary property as an array", () => {
    expect(parsedText.accountSummary.length).toBe(1);
  });
});

describe("large-account-summary pdf", () => {
  let parsedFile;

  beforeEach(() => {
    parsedFile = parsePdfText(accountSummary);
  });

  test("catches all the FINES and includes the associated amountDue and amountPaid", () => {
    const findFines = parsedFile.accountSummary.filter(item => {
      return item.costType === "fine";
    });
    expect(findFines[0].amountDue).toBe("680.00");
    expect(findFines[0].amountPaid).toBe("680.00");
  });
  test("catches all the FEES and includes the associated amountDue and amountPaid", () => {
    const findFees = parsedFile.accountSummary.filter(item => {
      return item.costType === "fee";
    });
    expect(findFees[0].amountDue).toBe("49.55");
    expect(findFees[0].amountPaid).toBe("49.55");
  });
  test("catches all INTEREST accounts and includes the associated amountDue and amountPaid", () => {
    const findInterest = parsedFile.accountSummary.filter(item => {
      return item.costType === "interest";
    });
    expect(findInterest[0].amountDue).toBe("2.65");
    expect(findInterest[0].amountPaid).toBe("2.65");
  });
  test("catches all the RESTITUTION cases and includes the associated amountDue and amountPaid", () => {
    const findRestitution = parsedFile.accountSummary.filter(item => {
      return item.costType === "restitution";
    });
    expect(findRestitution[0].amountDue).toBe("99.00");
    expect(findRestitution[0].amountPaid).toBe("99.00");
  });
  it("should NOT have collection: true on any charge", () => {
    const collectionList = parsedFile.accountSummary.filter(item => {
      return item.collection;
    });
    expect(collectionList.length).toBe(0);
  });
});

describe("state-collection-case pdf", () => {
  let parsedFile, collectionList;
  beforeEach(() => {
    parsedFile = parsePdfText(stateCollection);
    collectionList = parsedFile.accountSummary.filter(item => {
      return item.collection;
    });
  });
  it("should have collection: true for a charge that went to State Debt Collection", () => {
    expect(collectionList.length).toBeGreaterThan(0);
  });
  it("should have originalAmountDue and amendedAmountDue properties for collection cases", () => {
    expect(collectionList[0].originalAmountDue).toBe("600.00");
    expect(collectionList[0].amendedAmountDue).toBe("0.00");
  });
  test("catches all the TYPE: UNPAID INTEREST cases and includes the associated amountDue and amountPaid", () => {
    const findFees = parsedFile.accountSummary.filter(item => {
      return item.costType === "unpaid interest";
    });
    expect(findFees[0].amountDue).toBe("0.00");
    expect(findFees[0].amountPaid).toBe("0.00");
  });
});
