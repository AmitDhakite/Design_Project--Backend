import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(Cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.get("/", (req, res) => {
  res.send("App deployed1");
});

app.listen(port, function () {
  console.log("listening on localhost:" + port);
});
