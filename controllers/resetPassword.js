const Otp = require("../model/Schema/otp");
const Register = require("../model/Schema/admin");
const bcrypt = require("bcryptjs");

const resetPassword = async (req, res) => {
  const data = await Otp.findOne({
    email: req.body.email,
    code: req.body.code,
  });

  console.log(data);

  if (data) {
    let currentTime = new Date().getTime();
    let diff = data.expireIn - currentTime;

    if (diff <= 0) {
      return res.status(203).json({
        message: "OTP has been expired",
      });
    } else {
      // Hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Saving updated password
      Register.findByIdAndUpdate(
        data.userId,
        { hashedPassword: hashedPassword },
        (err, result) => {
          if (err) return console.log(err);
          return res.json({
            message: "Password Changed Successfully",
          });
        }
      );
    }
  }
};

module.exports = resetPassword;
