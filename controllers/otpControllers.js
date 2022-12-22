const Register = require("../model/Schema/admin");
const Otp = require("../model/Schema/otp");
const nodemailer = require("nodemailer");

// Saving otp
function sendToEmail(email, otp) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ansh.viyogi12@gmail.com",
      pass: "vekwpjwhcduclunh",
    },
  });

  var mailOptions = {
    from: "ansh.viyogi12@gmail.com",
    to: email,
    subject: "One Time Password for resetting your password",
    text: `OTP: ${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// Generating and saving otp
const otpControllers = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(203).json({
      message: "Please enter your email address",
    });
  }

  // Check if email exists
  const emailExists = await Register.findOne({ email });
  if (!emailExists) {
    return res.status(203).json({
      message: "No email exists",
    });
  }

  // Generating otp
  const otpCode = Math.floor(Math.random() * 10000 + 1);

  // Saving otp in db
  const otpData = new Otp({
    userId: emailExists._id.toString(),
    email,
    code: otpCode,
    expireIn: new Date().getTime() + 300 * 1000, // 3 minutes
  });

  otpData.save();

  sendToEmail(email, otpCode);

  res.status(200).json({
    message: "OTP sent successfully",
  });
};

module.exports = otpControllers;
