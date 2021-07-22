const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from  here");
});

app.listen(port, () => {
  console.log(`Listening to port:${port}`);
});
mongoose.connect(
  `${process.env.DB_USER}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to database.");
  }
);
