const {
  accountSummary
} = require("../docket-pdf-test-files/large-account-summary");
const { parsePdfText } = require("../parse-docket-pdf.utils");

describe("Testing parsed output for a pdf with a large account summary section", () => {
  let parsedFile;
  beforeEach(() => {
    parsedFile = parsePdfText(accountSummary);
  });

  test("caseNumber is 123456789", () => {
    expect(parsedFile.caseNumber).toBe("123456789");
  });

  test("the charges have the correct values", () => {
    let charge1 = parsedFile.charges[0];

    expect(charge1.statute).toBe("76-6-602");
    expect(charge1.description).toBe(
      "RETAIL THEFT (SHOPLIFTING) Class B Misdemeanor"
    );
    expect(charge1.disposition).toBe("{Guilty}");
    expect(charge1.dispositionDate).toBe("June 30, 2016");
  });

  describe("the ACCOUNT SUMMARY parses as expected", () => {
    it("always includes ACCOUNT SUMMARY as its first item", () => {
      expect(parsedFile.accountSummary[0].name).toBe("ACCOUNT SUMMARY");
    });

    it("catches all the FINES and includes the associated amountDue and amountPaid", () => {
      const findFines = parsedFile.accountSummary.filter(item => {
        return item.costType === "fine";
      });
      expect(findFines[0].amountDue).toBe("680.00");
      expect(findFines[0].amountPaid).toBe("680.00");
    });
  });
});
