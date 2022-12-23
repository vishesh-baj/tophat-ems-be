const Attendence = require("../../model/Schema/attendence");

const allAttendenceControllers = async (req, res) => {
  const allEmployee = await Attendence.find();
  res.json({ allEmployee });
};

module.exports = allAttendenceControllers;
