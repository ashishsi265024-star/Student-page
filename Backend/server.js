const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentPortal')
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("DB Connection Error:", err));

// Student Schema & Model
const Student = mongoose.model('Student', {
    name: String, 
    rollNo: String, 
    phone: String, 
    course: String, 
    password: String
});

// Register API
app.post('/api/register', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// Login API
app.post('/api/login', async (req, res) => {
    try {
        const { rollNo, password } = req.body;
        const user = await Student.findOne({ rollNo, password });
        if (user) {
            res.json({ success: true, user });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
