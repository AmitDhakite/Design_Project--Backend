import express from "express";
const router = express.Router();

import {
  register,
  login,
  addElectives,
  getSelectedElectives,
} from "../controllers/user.controller.js";
import { addCourse, getCourses } from "../controllers/course.controller.js";

//USER
router.post("/register", register);
router.post("/addCourse", addCourse);
router.post("/login", login);
router.post("/addElectives", addElectives);
router.post("/getSelectedElectives", getSelectedElectives);
router.get("/getCourses", getCourses);

export default router;
