import axios from "axios";

export const createSubject = async (subjectdata) => {
  await axios.post("http://10.0.2.2:5000/api/v1/subjects/", subjectdata);
};
