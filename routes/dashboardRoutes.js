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
const router = express.Router();

// Employee Routes
router.post("/employee", secureApi, employeeControllers);
router.get("/employee/all", secureApi, allEmployeeControllers);
router.get("/employee/:id", secureApi, singleEmployeeControllers);
router.put("/employee/update/:id", employeeUpdateControllers);
router.delete("/employee/delete/:id", secureApi, deleteEmployeeControllers);

// Candidate Routes
router.post("/candidate", secureApi, candidateControllers);
router.get("/candidate/all", secureApi, allCandidateControllers);
router.get("/candidate/:id", secureApi, singleCandidateControllers);
router.put("/candidate/update/:id", secureApi, updateCandidateControllers);
router.delete("/candidate/delete/:id", secureApi, deleteCandidateControllers);

module.exports = router;
