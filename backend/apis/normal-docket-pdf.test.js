const { file } = require("./docket-pdf-test-files/normal-docket-pdf");
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
    expect(actual0.offenseName).toBe("NO VALID LICENSE");
    expect(actual0.severity).toBe("Misdemeanor");
    expect(actual0.disposition).toBe("Dismissed (w/o prej)");
    expect(actual0.dispositionDate).toBe("Month 00, 0000");

    expect(actual1.statute).toBe("41-6A-601");
    expect(actual1.offenseName).toBe("SPEEDING 70 IN A 65");
    expect(actual1.severity).toBe(
      "Class C Misdemeanor Offense Date: Month 00, 0000"
    );
    expect(actual1.disposition).toBe("Dismissed (w/o prej)");
    expect(actual1.dispositionDate).toBe("Month 00, 0000");
  });
});
