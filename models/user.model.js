import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String },
  role: { type: String },
  name: { type: String },
  instituteEmail: { type: String, unique: true },
  instituteId: { type: String },
  instituteName: { type: String },
  batch: { type: String },
  contact: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);

export default User;
