const express = require('express');
const app = express();
const upload = require('./middleware/upload');
const connectdb = require('./config/db');
const {getStudents, registerStudent ,Studentprofile} = require('./Router/StudentRouter');

// middleware
app.use(express.json());
const path = require('path');

// This is the missing piece!
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// database
connectdb();

// home route
app.get('/', (req, res) => {
  res.send("Welcome to the College API");
});

// routes

app.use('/api/students/register', upload.single('photo'), registerStudent);
app.use('/api/students', getStudents);




// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});