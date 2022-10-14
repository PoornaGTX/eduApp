import express from "express";
const router = express.Router();

import { createSubject } from "../controllers/subjectController.js";

router.route("/").post(createSubject);
router.route("/grade").post();
router.route("/subjects").post();
router.route("/grades").post();

export default router;
