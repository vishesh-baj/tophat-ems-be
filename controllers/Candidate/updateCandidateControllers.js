const Candidate = require("../../model/Schema/candidate");

const updateCandidateControllers = (req, res) => {
  const { name, email, contactNumber, technology } = req.body;

  if (!name || !email || !contactNumber || !technology) {
    return res.status(400).json({
      message:
        "Name, Email, Contact Number & Technologies field cannot be empty",
    });
  }

  if (String(contactNumber).length < 10) {
    return res.status(400).json({
      message: "Contact number should atleast have 10 digits",
    });
  }

  Candidate.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "Please enter a valid id",
        });
      } else {
        res.status(200).json({
          message: "Candidate Saved Successfully",
          result,
        });
      }
    }
  );
};

module.exports = updateCandidateControllers;
