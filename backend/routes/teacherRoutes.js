import express from "express";
const router = express.Router();

import {
  createNotice,
  getAllNotices,
  updateNotice,
  deleteNotice,
} from "../controllers/teacherController.js";

router.route("/").post(createNotice);
router.route("/").get(getAllNotices);
router.route("/:id").patch(updateNotice);
router.route("/:id").delete(deleteNotice);

export default router;
