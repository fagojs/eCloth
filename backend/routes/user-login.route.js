const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth.middleware");

const router = express.Router();

const Users = require("../models/user.model");

router.post("/user", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill required information.",
    });
  }
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User with that email doesn't exist.",
      });
    }
    //comparing	password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid Password.",
        });
      }
      //if	matched	password
      jwt.sign(
        { id: user.id, displayName: user.displayName },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          res.status(201).json({
            token,
            user: {
              id: user.id,
              displayName: user.displayName,
              email: user.email,
            },
          });
        }
      );
    });
  } catch (error) {
    res.status(400).json({
      message: "Error logging in user.",
    });
  }
});

//authorization	when	asked	user-data
router.get("/user", auth, async (req, res) => {
  const user = await Users.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;
