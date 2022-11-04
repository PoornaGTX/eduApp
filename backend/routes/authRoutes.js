import express from "express";
const router = express.Router();

import {
  register,
  login,
  updateUser,
  getAllUsers,
  showStats,
} from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser/:id").patch(updateUser);
router.route("/users").get(getAllUsers);
router.route("/stats").get(showStats);

export default router;
