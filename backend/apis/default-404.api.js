const { app } = require("../server");

app.use("/api/*", (req, res) => {
  res.status(404).send({
    error: `No such api`
  });
});
