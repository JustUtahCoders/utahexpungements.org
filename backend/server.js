const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

exports.app = app;

// Google App Engine automatically creates decent logs without the need of morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "../static")));
app.use("/dist", express.static(path.join(__dirname, "../dist")));

require("./apis/parse-docket-pdf.api");

// Must be last endpoint to require
require("./apis/default-404.api");
require("./index-html");

app.listen(process.env.PORT || 8080, () => {
  console.log("utahexpungements.org server is running on port 8080");
});
