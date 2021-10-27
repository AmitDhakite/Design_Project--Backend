import express from "express";
const router = express.Router();

import { register, login } from "../controllers/user.controller.js";
import { addCourse, getCourses } from "../controllers/course.controller.js";

//USER
router.post("/register", register);
router.post("/addCourse", addCourse);
router.post("/login", login);
router.get("/getCourses", getCourses);

export default router;
