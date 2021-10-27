import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseId: { type: String },
  name: { type: String },
  credits: { type: Number },
  instituteName: { type: String },
  batch: { type: String },
  evaluationPolicy: { type: String },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
