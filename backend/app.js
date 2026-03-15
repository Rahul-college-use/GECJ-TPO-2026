const express = require('express');
const app = express();
const upload = require('./middleware/upload');
const connectdb = require('./config/db');
const {getStudents, registerStudent } = require('./Router/StudentRouter');
const {StudentProfile,deleteStudent,updateProfile} = require('./Router/StudentRouter')
const { AdminLogin, AdminLogout } = require('./Router/AdminRoute');
const bcrypt = require('bcrypt')

// middleware
app.use(express.json());
const path = require('path');
const Admin = require('./models/Admin');
const Students = require('./models/Students');

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
app.use('/get/student/profile/:id',StudentProfile)
app.use('/get/studentProfile/id/:id', StudentProfile)
app.use('/get/students',getStudents); // all student 
app.use('/api/delete/student/:id',deleteStudent)
app.use('/api/student/update/:id', upload.single('photo'),updateProfile)


// app.get('/add',(req,res)=>{

//   let password = 123
//   bcrypt.genSalt(12,(err,salt)=>{
//     // console.log(salt)
//     bcrypt.hash(password,salt,async (err,hash)=>{
//       if(err){return }
//       else{
//          const adminCreate  = await Admin.create({
//             name:"admin",
//             email:"admin@gmail.com",
        
//             password:hash
//           }) 
//       }
//     })
//   })
//   res.send(adminCreate)
// })

app.use('/api/admin/login',AdminLogin)
app.use('/api/admin/logout',AdminLogout)


// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});