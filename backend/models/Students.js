// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dept: { type: String, required: true }, 
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [String],
  photo: { type: String },
  linkedIn: { type: String },
  batch: { type: Number, default: 2026 }
});

module.exports = mongoose.model('Student', StudentSchema);