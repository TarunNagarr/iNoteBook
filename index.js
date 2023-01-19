const connectMongo = require("./db");
const express = require("express");

connectMongo();
const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
