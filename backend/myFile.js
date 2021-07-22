const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRegisterRoutes = require("./routes/users-register.route");
const userLoginRoutes = require("./routes/user-login.route");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/register", userRegisterRoutes);
app.use("/login", userRegisterRoutes);

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
