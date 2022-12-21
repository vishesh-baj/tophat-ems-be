const mongoose = require("mongoose");

const attendenceSchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User id is mandatory"],
  },
  name: {
    type: String,
    required: [true, "Name is mandatory"],
  },
  email: {
    type: String,
    required: [true, "Email is mandatory"],
  },
  attendence: {
    type: String,
    required: [true, "Attendence is mandatory"],
  },
  time: {
    type: Number,
    required: [true, "Time is mandatory"],
  },
  date: {
    type: Number,
    required: [true, "Date is mandatory"],
  },
  month: {
    type: Number,
    required: [true, "Month is mandatory"],
  },
  year: {
    type: Number,
    required: [true, "Year is mandatory"],
  },
});

const Attendence = mongoose.model("Attendence", attendenceSchema);

module.exports = Attendence;
