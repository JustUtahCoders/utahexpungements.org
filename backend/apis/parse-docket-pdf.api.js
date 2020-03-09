const { app } = require("../server");
const Busboy = require("busboy");
const pdf = require("pdf-parse");
const { parsePdfText } = require("./parse-docket-pdf.utils");
const { generateFlagJson } = require("./generate-flag-json.utils");

app.post("/api/docket-pdfs", (req, res) => {
  let busboy;
  const busBoyConfig = {
    headers: req.headers,
    limits: {
      fileSize: 10
    }
  };

  try {
    busboy = new Busboy(busBoyConfig);
    busboy.highWaterMark = 2 * 1024 * 1024; // Set 2MiB buffer
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
    return;
  }

  let fileWasUploaded = false;
  let requestErr;
  let payload = [];
  let count = 0;

  busboy.on("file", function(fieldName, file, filename, encoding, mimetype) {
    if (mimetype !== "application/pdf") {
      return res
        .status(400)
        .send({ error: "Uploaded file did not have mimetype application/pdf" });
    }
    fileWasUploaded = true;
    if (filename) count++;

    file.on("data", data => {
      pdf(data)
        .then(
          thePdf => {
            const processJson = req.query.processJson === "true" ? true : false;
            if (processJson) {
              //comment this back in if you want to test flag json
              //res.send(generateFlagJson(parsePdfText(thePdf.text)));
              payload.push(parsePdfText(thePdf.text));
              count--;
              if (count === 0) res.send(payload);
            } else {
              payload.push(res.send(thePdf.text));
              count--;
              if (count === 0) res.send(payload);
            }
          },
          err => {
            res.status(400).send({ error: err });
          }
        )
        .catch(err => {
          console.error(err);
          res.status(500).send({ error: err.message });
        });
    });
    file.on("end", () => {
      if (requestErr) {
        res.status(400).send({ error: requestErr });
      }
    });
  });

  busboy.on("finish", function() {
    if (!fileWasUploaded) {
      res.status(400).send({ error: "No pdf was uploaded" });
    }
  });

  return req.pipe(busboy);
});
