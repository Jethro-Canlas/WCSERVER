import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
a
const studentSchema = new mongoose.Schema({
  studentId: String,
  firstName: String,
  lastName: String,
  section: String,
});
const Student = mongoose.model("Student", studentSchema);

const adminSchema = new mongoose.Schema({
  adminId: String,
  firstName: String,
  lastName: String,
  department: String,
});
const Admin = mongoose.model("Admin", adminSchema);

app.post("/api/student", async (req, res) => {
  try {
    const savedStudent = await new Student(req.body).save();
    res.json(savedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/admin", async (req, res) => {
  try {
    const savedAdmin = await new Admin(req.body).save();
    res.json(savedAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/admin", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
