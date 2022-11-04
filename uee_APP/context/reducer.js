import {
  ADD_GRADE_BEGIN,
  ADD_GRADE_SUCCESS,
  ADD_GRADE_ERROR,
  GET_SUBJECTS_BEGIN,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_ERROR,
  GET_GRADES_BEGIN,
  GET_GRADES_SUCCESS,
  GET_GRADES_ERROR,
  UPDATE_SUBJECT_BEGIN,
  UPDATE_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_ERROR,
  DELETE_SUBJECT_BEGIN,
  ADD_SUBJECT_BEGIN,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_ERROR,
  UPDATE_GRADE_BEGIN,
  UPDATE_GRADE_SUCCESS,
  UPDATE_GRADE_ERROR,
  DELETE_GRADE_BEGIN,
} from "./action";

const reducer = (state, action) => {
  //ADD grade
  if (action.type === ADD_GRADE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_GRADE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting",
    };
  }

  if (action.type === ADD_GRADE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "hello",
    };
  }

  //ADD Subjects
  if (action.type === ADD_SUBJECT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_SUBJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting",
    };
  }

  if (action.type === ADD_SUBJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "hello",
    };
  }

  //get subjects
  if (action.type === GET_SUBJECTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_SUBJECTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      subjects: action.payload.AllSubjects,
      alertType: "success",
      alertText: "User Created! Redirecting",
    };
  }

  if (action.type === GET_SUBJECTS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "hello",
    };
  }

  //get grades
  if (action.type === GET_GRADES_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_GRADES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      grades: action.payload.AllGrades,
      alertType: "success",
      alertText: "User Created! Redirecting",
    };
  }

  if (action.type === GET_GRADES_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "hello",
    };
  }

  //updateSubject
  if (action.type === UPDATE_SUBJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === UPDATE_SUBJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Subject Updated",
    };
  }

  if (action.type === UPDATE_SUBJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      // alertText: action.payload.msg,
    };
  }

  //delete subject
  if (action.type === DELETE_SUBJECT_BEGIN) {
    return { ...state, isLoading: true };
  }

  //delete grade
  if (action.type === DELETE_GRADE_BEGIN) {
    return { ...state, isLoading: true };
  }

  //updateGrade
  if (action.type === UPDATE_GRADE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === UPDATE_GRADE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Subject Updated",
    };
  }

  if (action.type === UPDATE_GRADE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
