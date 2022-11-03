import GradeModel from "../models/Grade.js";
import { StatusCodes } from "http-status-codes";

const createGrade = async (req, res) => {
  const { Grade, color } = req.body;

  const GradeAdd = await GradeModel.create({
    Grade,
    color,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ Grade: GradeAdd.Grade, msg: "Grade added" });
};

const updateSubject = async (req, res) => {
  const { id: subjectID } = req.params;
  const { subjectName, color } = req.body;

  if (!subjectName || !color) {
    // throw new BadRequestError("Please Provide all values.");
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ msg: "please provide all values" });
  }

  const subject = await Subject.findOne({ _id: subjectID });
  if (!subject) {
    //throw new NotFoundError(`No user with user ID ${uId}`);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ msg: "no subject found to update" });
  }

  const updateSubject = await Subject.findOneAndUpdate(
    { _id: subjectID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updateSubject });
};

const deleteSubject = async (req, res) => {
  const { id: subjectID } = req.params;
  const subject = await Subject.findOne({ _id: subjectID });

  if (!subject) {
    // throw new NotFoundError(`No job with id :${subjectID}`);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ msg: "no subject found to update" });
  }

  // checkPermissions(req.user, job.createdBy)

  await subject.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};

const getAllGrades = async (req, res) => {
  const AllGrades = await GradeModel.find({});
  res.status(StatusCodes.OK).json({ AllGrades });
};

export { createGrade, updateSubject, deleteSubject, getAllGrades };
