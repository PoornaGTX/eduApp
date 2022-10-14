import Subject from "../models/Subject.js";
import { StatusCodes } from "http-status-codes";

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

const getAllSubjects = async (req, res) => {
  const AllSubjects = await Subject.find({});
  res.status(StatusCodes.OK).json({ allSubjects: AllSubjects });
};

export { createSubject, updateSubject, deleteSubject, getAllSubjects };
