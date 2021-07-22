const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/user.model");

const router = express.Router();

router.post("/new-user", async (req, res) => {
  const { displayName, email, password } = req.body;
  //if	empty	any	field	?
  if (!displayName || !email || !password) {
    return res.status(400).json("Please	fill	the	requirements	provided.");
  }
  try {
    //if	user	already	exists	?
    const user = await Users.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User	with	provided	email	already	exists." });
    }
    //if	new	user
    const newUser = new Users({
      displayName,
      email,
      password,
    });
    //password	hashing	and	storing	in	db
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        const savedUser = await newUser.save();
        //creating	token	required	for	auth
        jwt.sign(
          { id: savedUser.id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.status(201).json({
              token,
              user: {
                id: savedUser.id,
                displayName: savedUser.displayName,
                email: savvedUser.email,
              },
            });
          }
        );
      });
    });
  } catch (error) {
    res.status(400).json({
      message: "Error	registering	user.",
    });
  }
});

module.exports = router;
