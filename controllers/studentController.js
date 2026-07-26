const Student = require("../models/studentModel");
// After update 
const { validationResult } = require("express-validator");

exports.getAllStudents = async (req, res) => {

    try {

        const students = await Student.getAllStudents();

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.getStudentById = async (req, res) => {

    try {

        const student = await Student.getStudentById(
            req.params.id
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.createStudent = async (req, res) => {

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {

          return res.status(400).json({

             errors: errors.array()

    });

}

        await Student.createStudent(req.body);

        res.status(201).json({

            message: "Student created successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

exports.updateStudent = async (req, res) => {

    try {

        const result = await Student.updateStudent(

            req.params.id,
            req.body

        );

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json({
            message: "Student updated successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.deleteStudent = async (req, res) => {

    try {

        const result = await Student.deleteStudent(

            req.params.id

        );

        if (result.affectedRows === 0) {

            return res.status(404).json({

                message: "Student not found"

            });

        }

        res.json({

            message: "Student deleted successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

exports.searchStudents = async (req, res) => {

    try {

        const students = await Student.searchStudents(

            req.query.name

        );

        res.json(students);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

