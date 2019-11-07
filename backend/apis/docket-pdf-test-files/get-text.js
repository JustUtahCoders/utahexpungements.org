const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

const filePath = process.argv[2]; // Enter string indicating the absolute path to the pdf file on your machine: C:/Users/Owner/Documents/<filename>
const destination = process.argv[3]; // Enter a string of the form ./<filename>.js where filename is the name of the file in this folder that will hold the text output.

// Whilst in the docket-pdf-test-files directory, the whole command line input would look like this:
// node get-text.js "C:<filepath>\<filename>" "./<what-you-want-the-file-to-be-named>.js"

const data = fs.readFileSync(path.resolve(filePath));

pdf(data).then(parse => {
  fs.writeFile(destination, parse.text, err => {
    if (err) console.log(err);
    console.log(
      `Your file at ${filePath} has been saved at docket-pdf-test-files${destination}`
    );
  });
});

// Now go to the newly created file this script created. Do the following:
// (1) At the first position of the first line, type a quote mark.
// (2) Go to the bottom of the file and put a close quote at the end of the text.
// (3) Before the first quotation mark at the beginning of the file, type: exports.file =
// (4) Remove identifying information from the file. This includes: case number, defendant name, etc
