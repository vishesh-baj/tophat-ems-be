const Attendence = require("../../model/Schema/attendence");

const employeeAttendenceControllers = async (req, res) => {
  const { userId, name, email, attendence, time } = req.body;

  console.log(req.body);

  if (!userId || !name || !email || !attendence || !time) {
    return res.status(203).json({
      message: "Please fill all the fields",
    });
  }

  const dateObj = new Date();
  const date = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const existingAttendence = await Attendence.findOne({
    userId,
    email,
    date,
    month,
    year,
  });

  if (existingAttendence) {
    return res.status(203).json({
      message: "Attendence have already been marked",
    });
  }

  const saveAttendence = new Attendence({
    userId,
    name,
    email,
    attendence,
    time,
    date,
    month,
    year,
  });

  saveAttendence.save();
  res.status(200).json({
    messge: "Attendence marked successfully",
  });
};

module.exports = employeeAttendenceControllers;
