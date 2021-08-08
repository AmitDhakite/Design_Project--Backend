import mongoose from "mongoose";

const Schema = mongoose.Schema;

const instituteSchema = new Schema({
  instituteRegistrationId: {type: String},
  institute: {type: String},
  email: {type: String, unique: true},
  password:  {type: String},
});

const Institute = mongoose.model("Institute", instituteSchema);

export default Institute;
