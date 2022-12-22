const bcrypt = require("bcryptjs");
const Register = require("../model/Schema/admin");
const jwt = require("jsonwebtoken");

const loginControllers = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(203);
    return res.json({
      message: "Email and Password are mandatory",
    });
  }

  const user = await Register.findOne({ email });
  if (!user) {
    res.status(203);
    return res.json({
      message: "User not found, please signup",
    });
  }

  // Check if the password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordIsCorrect) {
    res.status(203);
    return res.json({
      message: "Invalid Password",
    });
  }

  const userId = user._id.toString();

  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res.status(200).json({
    message: "Logged in successfully",
    token,
    user,
  });
};

module.exports = loginControllers;
