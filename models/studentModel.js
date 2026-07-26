const db = require("../config/db");

const Student = {
  async getAllStudents() {
    const [rows] = await db.query("SELECT * FROM students");
    return rows;
  },

  async getStudentById(id) {
    const [rows] = await db.query(
      "SELECT * FROM students WHERE id = ?",
      [id]
    );

    return rows[0];
  },

  async createStudent(student) {
    const {
      full_name,
      email,
      phone,
      course,
      semester,
    } = student;

    const [result] = await db.query(
      `INSERT INTO students
      (full_name, email, phone, course, semester)
      VALUES (?, ?, ?, ?, ?)`,
      [
        full_name,
        email,
        phone,
        course,
        semester,
      ]
    );

    return result;
  }, // <-- Missing comma was here

  async updateStudent(id, student) {
    const {
      full_name,
      email,
      phone,
      course,
      semester,
    } = student;

    const [result] = await db.query(
      `UPDATE students
       SET full_name = ?,
           email = ?,
           phone = ?,
           course = ?,
           semester = ?
       WHERE id = ?`,
      [
        full_name,
        email,
        phone,
        course,
        semester,
        id,
      ]
    );

    return result;
  },

  async deleteStudent(id) {
    const [result] = await db.query(
      "DELETE FROM students WHERE id = ?",
      [id]
    );

    return result;
  },

  async searchStudents(name) {
    const [rows] = await db.query(
      "SELECT * FROM students WHERE full_name LIKE ?",
      [`%${name}%`]
    );

    return rows;
  },
};

module.exports = Student;