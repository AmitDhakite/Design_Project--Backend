import express from "express";
const router = express.Router();

import { register } from "../controllers/user.controller.js";

//USER
router.post("/register", register);

export default router;
