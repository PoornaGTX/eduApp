import express from "express";
const router = express.Router();

import {
  createSubject,
  getAllSubjects,
  updateSubject,
  deleteSubject,
} from "../controllers/subjectController.js";

import {
  createGrade,
  getAllGrades,
  updateGrade,
  deleteGrade,
} from "../controllers/greadeController.js";

router.route("/").post(createSubject);
router.route("/").get(getAllSubjects);
router.route("/:id").patch(updateSubject);
router.route("/:id").delete(deleteSubject);
router.route("/grades").post(createGrade);
router.route("/grades").get(getAllGrades);
router.route("/grades/:id").patch(updateGrade);
router.route("/grades/:id").delete(deleteGrade);

export default router;
