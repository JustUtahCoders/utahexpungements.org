const { file } = require("./docket-pdf-test-files/normal-docket-pdf");
const { accountSection } = require("./docket-pdf-test-files/normal-docket-pdf");
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
  const parsedSection = parsePdfText(accountSection);
  const parsedText = parsePdfText(file);

  test("always adds accountSummary property to return object", () => {
    expect(parsedSection.accountSummary).toBeTruthy();
    expect(parsedText.accountSummary).toBeTruthy();
  });

  test("if there is an ACCOUNT SUMMARY, it always has a TOTAL_REVENUE property", () => {
    expect(parsedSection.accountSummary.TOTAL_REVENUE).toBeTruthy();
    expect(parsedText.accountSummary.TOTAL_REVENUE).not.toBeTruthy();
  });
});
