const express = require("express");
const allEmployeeControllers = require("../controllers/Employee/allEmployeeControllers");
const candidateControllers = require("../controllers/Candidate/candidateControllers");
const employeeControllers = require("../controllers/Employee/employeeControllers");
const singleEmployeeControllers = require("../controllers/Employee/singleEmployeeControllers");
const secureApi = require("../middlewares/secureAPI");
const allCandidateControllers = require("../controllers/Candidate/allCandidateControllers");
const singleCandidateControllers = require("../controllers/Candidate/singleCandidateControllers");
const updateCandidateControllers = require("../controllers/Candidate/updateCandidateControllers");
const deleteCandidateControllers = require("../controllers/Candidate/deleteCandidateControllers");
const employeeUpdateControllers = require("../controllers/Employee/employeeUpdateControllers");
const deleteEmployeeControllers = require("../controllers/Employee/deleteEmployeeControllers");
const testingCandidateControllers = require("../controllers/Testing/testingCandidateControllers");
const testingEmployeeControllers = require("../controllers/Testing/testingEmployeeControllers");
const employeeAttendenceControllers = require("../controllers/Employee/employeeAttendenceControllers");
const allAttendenceControllers = require("../controllers/Employee/allAttendenceControllers");
const router = express.Router();

// Employee Routes
router.post("/employee", secureApi, employeeControllers);
router.get("/employee/all", secureApi, allEmployeeControllers);
router.get("/employee/:id", secureApi, singleEmployeeControllers);
router.put("/employee/update/:id", secureApi, employeeUpdateControllers);
router.delete("/employee/delete/:id", secureApi, deleteEmployeeControllers);
router.post("/employee/attendence", secureApi, employeeAttendenceControllers);
router.get("/employee/attendence/all", allAttendenceControllers);

// Candidate Routes
router.post("/candidate", secureApi, candidateControllers);
router.get("/candidate/all", secureApi, allCandidateControllers);
router.get("/candidate/:id", secureApi, singleCandidateControllers);
router.put("/candidate/update/:id", secureApi, updateCandidateControllers);
router.delete("/candidate/delete/:id", secureApi, deleteCandidateControllers);

// Testing Admin Routes
router.get("/testing/candidate", secureApi, testingCandidateControllers);
router.get("/testing/employee", secureApi, testingEmployeeControllers);

module.exports = router;
