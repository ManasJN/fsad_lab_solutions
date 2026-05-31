const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model("Student", studentSchema);

app.post("/add", async (req, res) => {

    const student = new Student({
        name: req.body.name,
        age: req.body.age
    });

    await student.save();

    res.send("Student Added");
});

app.get("/students", async (req, res) => {

    const data = await Student.find();

    res.json(data);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});