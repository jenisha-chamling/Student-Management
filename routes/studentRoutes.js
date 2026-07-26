// const express = require("express");

// const router = express.Router();

// const studentController = require("../controllers/studentController");

// router.get("/", studentController.getAllStudents);

// router.get("/:id", studentController.getStudentById);

// router.post("/", studentController.createStudent);

// module.exports = router;

//after update

const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

const { body } = require("express-validator");

router.get("/", studentController.getAllStudents);

router.get("/search", studentController.searchStudents);

router.get("/:id", studentController.getStudentById);

// router.post("/", studentController.createStudent);
// After update 

router.post(

    "/",

    [

        body("full_name")
            .notEmpty()
            .withMessage("Full name is required"),

        body("email")
            .isEmail()
            .withMessage("Invalid email"),

        body("semester")
            .isInt({ min: 1, max: 8 })
            .withMessage("Semester must be between 1 and 8")

    ],

    studentController.createStudent

);


router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;