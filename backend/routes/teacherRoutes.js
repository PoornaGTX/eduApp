import express from "express";
const router = express.Router();

import {
  createNotice,
  getAllNotices,
  updateNotice,
  deleteNotice,
} from "../controllers/teacherController.js";

import {
  sendMessage,
  getAllMessages,
} from "../controllers/teacherController.js";

router.route("/").post(createNotice);
router.route("/").get(getAllNotices);
router.route("/:id").patch(updateNotice);
router.route("/:id").delete(deleteNotice);

router.route("/message").post(sendMessage);
router.route("/message/:id").get(getAllMessages);

export default router;
