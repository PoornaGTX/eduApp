import { createContext, useReducer } from "react";

export const knowledgelabContext = createContext({
  grades: [],
  subjects: [],
  addSubject: ({ grade, subjectName }) => {},
  deleteSubject: (gID) => {},
  updateSubject: (gID, { subjectName }) => {},
});

const knowledgelabReducser = (state, action) => {
  if (action.type === "ADD") {
  }
  if (action.type === "UPDATE") {
  }
  if (action.type === "DELETE") {
  }
};

const knowledgelabContextProvider = ({ children }) => {
  const [knowledgelabState, dispatch] = useReducer(knowledgelabReducser);

  const addSubject = (subjectData) => {
    dispatch({ type: "ADD", payload: subjectData });
  };

  const updateSubject = (gID, subjectData) => {
    dispatch({ type: "UPDATE", payload: { gID: gID, data: subjectData } });
  };

  const deleteSubject = (gID) => {
    dispatch({ type: "DELETE", payload: gID });
  };

  return (
    <knowledgelabContext.Provider>{children}</knowledgelabContext.Provider>
  );
};
