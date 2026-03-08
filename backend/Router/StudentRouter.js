const Student = require('../models/Students');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().limit(10);
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

exports.registerStudent = async (req, res) => {
  try {
    let { name, email, phone, dept, skills } = req.body;

    // console.log(req.file)
    const parsedSkills =
      typeof skills === 'string' ? JSON.parse(skills) : skills;

    const photoPath = req.file ? `/uploads/${req.file.filename}` : null;

    const savedStudent = await Student.create({
      name,
      email,
      phone,
      dept,
      skills: parsedSkills,
      photo: photoPath
    });

    res.status(201).json(savedStudent);

  } catch (err) {
    res.status(400).json({
      message: "Registration failed",
      error: err.message
    });
  }
};


exports.Studentprofile = '/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: "Error fetching student", error: err.message });
  }
}; 