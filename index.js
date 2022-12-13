const express = require("express");
const app = express();

app.use("/users", require("./routes/users"));

app.listen(3000, () => {
  console.log("serve up dawg");
});
