import express from "express";
const router = express.Router();

import {
  getAllUsers,
  subscribeTeacher,
} from "../controllers/studentController.js";

router.route("/").get(getAllUsers);
router.route("/subscribe/:id").patch(subscribeTeacher);
// router.route("/").post(login);
// router.route("/login").post(login);
// router.route("/").get(getAllUsers);
// router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
