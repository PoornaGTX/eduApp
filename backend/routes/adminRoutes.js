import express from "express";
const router = express.Router();

import {
  createSubject,
  getAllSubjects,
} from "../controllers/subjectController.js";

router.route("/").post(createSubject);
router.route("/").get(getAllSubjects);
router.route("/subjects").post();
router.route("/grades").post();

export default router;
