require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const shopRoutes = require("./routes/shops");


app.use((req, _res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/shops", shopRoutes);
app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});