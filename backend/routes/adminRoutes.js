import express from "express";
const router = express.Router();

import {
  createSubject,
  getAllSubjects,
  updateSubject,
  deleteSubject,
} from "../controllers/subjectController.js";

import { createGrade, getAllGrades } from "../controllers/greadeController.js";

router.route("/").post(createSubject);
router.route("/").get(getAllSubjects);
router.route("/:id").patch(updateSubject);
router.route("/:id").delete(deleteSubject);
router.route("/grades").post(createGrade);
router.route("/grades").get(getAllGrades);

export default router;
