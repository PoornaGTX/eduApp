import { createContext, useReducer } from "react";

const dummData = [
  { id: "g1s1", gID: "Grade 1", subjectName: "English", color: "#f5428d" },
  { id: "g1s2", gID: "Grade 1", subjectName: "Sinhala", color: "#f54242" },
  { id: "g1s3", gID: "Grade 1", subjectName: "IT", color: "#f5a442" },
  { id: "g1s4", gID: "Grade 1", subjectName: "Tamil", color: "#f5d142" },
  { id: "g1s5", gID: "Grade 1", subjectName: "Hisory", color: "#368dff" },
  { id: "g1s6", gID: "Grade 1", subjectName: "Maths", color: "#41d95d" },
  { id: "g1s7", gID: "Grade 1", subjectName: "Civics", color: "#41d95d" },
  { id: "g1s8", gID: "Grade 1", subjectName: "Buddhisam", color: "#9eecff" },
  { id: "g1s9", gID: "Grade 1", subjectName: "Buddhisam", color: "#ffc7ff" },
  { id: "g1s10", gID: "Grade 1", subjectName: "Buddhisam", color: "#47fced" },
  { id: "g1s11", gID: "Grade 1", subjectName: "Buddhisam", color: "#f5a442" },
  { id: "g1s12", gID: "Grade 1", subjectName: "Buddhisam", color: "#368dff" },

  { id: "g2s1", gID: "g2", subjectName: "English", color: "#f5428d" },
  { id: "g2s2", gID: "g2", subjectName: "Sinhala", color: "#f54242" },
  { id: "g2s3", gID: "g2", subjectName: "IT", color: "#f5a442" },
  { id: "g2s4", gID: "g2", subjectName: "Tamil", color: "#f5d142" },
  { id: "g2s5", gID: "g2", subjectName: "Hisory", color: "#368dff" },
  { id: "g2s6", gID: "g2", subjectName: "Maths", color: "#41d95d" },
];

export const KnowledgelabContext = createContext({
  grades: [],
  subjects: [],
  addSubject: ({ grade, subjectName }) => {},
  deleteSubject: (gID) => {},
  updateSubject: (gID, { subjectName }) => {},
});

const knowledgelabReducer = (state, action) => {
  if (action.type === "ADD") {
    const id = new Date().toString() + Math.random().toString();
    return [...state, { ...action.payload, id: id, color: "#41d95d" }];
  }
  if (action.type === "UPDATE") {
    const updatebleSubjectIndex = state.findIndex(
      (subject) => subject.id === action.payload.id
    );
    const updableSubject = state[updatebleSubjectIndex];
    const updatedItem = { ...updableSubject, ...action.payload.data };
    const updatedSubjects = [...state];
    updatedSubjects[updatebleSubjectIndex] = updatedItem;
    return updatedSubjects;
  }
  if (action.type === "DELETE") {
    return state.filter((subject) => subject.id !== action.payload);
  }
  return state;
};

const KnowledgelabContextProvider = ({ children }) => {
  const [knowledgelabState, dispatch] = useReducer(
    knowledgelabReducer,
    dummData
  );

  const addSubject = (subjectData) => {
    dispatch({ type: "ADD", payload: subjectData });
  };

  const updateSubject = (id, subjectData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: subjectData } });
  };

  const deleteSubject = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    subjects: knowledgelabState,
    addSubject: addSubject,
    updateSubject: updateSubject,
    deleteSubject: deleteSubject,
  };

  return (
    <KnowledgelabContext.Provider value={value}>
      {children}
    </KnowledgelabContext.Provider>
  );
};

export default KnowledgelabContextProvider;
