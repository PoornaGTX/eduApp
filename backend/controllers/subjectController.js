import Subject from "../models/Subject.js";
import { StatusCodes } from "http-status-codes";

import moment from "moment";

const createSubject = async (req, res) => {
  const { gID, subjectName, color } = req.body;

  const subject = await Subject.create({
    gID,
    subjectName,
    color,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ subName: subject.subjectName, msg: "user Created" });
};

const updateSubject = (req, res) => {};
const deleteSubject = (req, res) => {};
const getAllSubjects = (req, res) => {};

export { createSubject, updateSubject, deleteSubject, getAllSubjects };