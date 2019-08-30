const { app } = require("./server");

app.use("*", (req, res) => {
  res.render("index", {
    FRONTEND_BASE:
      process.env.NODE_ENV === "production" ? "/dist" : "http://localhost:9000",
    IS_LOCAL: process.env.NODE_ENV !== "production"
  });
});
