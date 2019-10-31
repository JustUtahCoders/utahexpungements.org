const { file } = require("./docket-pdf-test-files/file");
const { parsePdfText } = require("./parse-docket-pdf.utils");

test("File content is defined", () => {
  expect(file).not.toBeDefined();
});

test("File content can be parsed", () => {
  expect(parsePdfText(file)).toBe(1);
});
