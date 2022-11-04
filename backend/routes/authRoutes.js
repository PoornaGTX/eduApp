import express from "express";
const router = express.Router();

import { register, login } from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/login").post(login);
// router.route("/").get(getAllUsers);
// router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
