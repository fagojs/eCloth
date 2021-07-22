const jwt = require("jsonwebtoken");

//authorizing	user	for	every	routes	it	makes	in	site
auth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(400).json({
      message: "Unauthorized	access.",
    });
  }
  try {
    //verify	token	provided	by	user
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    res.end();
    next();
  } catch (error) {
    res.status(400).json({
      message: "Not	Authorized	User.",
    });
  }
};
module.exports = auth;
