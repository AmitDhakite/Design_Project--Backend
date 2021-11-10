import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import Cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(Cors());

mongoose.connect(
  "mongodb+srv://amit:123@cluster0.immwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("App Deployed Design Project");
});

app.listen(port, function () {
  console.log("listening on localhost:" + port);
});
