const { file } = require("./docket-pdf-test-files/file");
const { parsePdfText } = require("./parse-docket-pdf.utils");
const parsedText = parsePdfText(file);

//Bad:
//{"caseNumber": null, "charges": []}

//Good:
//{ caseNumber: '000000000',
//  charges:
//   [ { statute: '53-3-202(1)(A)',
//       description: 'NO VALID LICENSE Misdemeanor',
//       disposition: 'Dismissed (w/o prej)',
//       dispositionDate: 'Month 00, 0000' },
//     { statute: '41-6A-601',
//       description:
//        'SPEEDING 70 in a 65 Class C Misdemeanor Offense Date: Month 00, 0000',
//       disposition: 'Dismissed (w/o prej)',
//       dispositionDate: 'Month 00, 0000' } ] }

console.log(parsedText);

console.log();

test("Returns an object", () => {
  expect(parsedText).toBeTruthy();
  expect(typeof parsedText).toBe("object");
});

test("caseNumber is string", () => {
  expect(typeof parsedText.caseNumber).toBe("string");
});

test("charges is object", () => {
  expect(typeof parsedText.charges[0]).toBe("object");
  expect(typeof parsedText.charges).toBe("object");
});

test("charges is not empty", () => {
  expect(typeof parsedText.charges[0]).toBe("object");
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
