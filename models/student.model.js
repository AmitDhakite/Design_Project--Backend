import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentId: { type: String },
  name: {type: String},
  instituteEmail: {type: String, unique: true},
  institute: {type: String},
  batch:  {type: String},
  password:  {type: String},
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
