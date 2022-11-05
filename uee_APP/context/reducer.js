import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
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
  LOGOUT_BEGIN,
  TEACHER_GET_ALL_NOTICES_BEGIN,
  TEACHER_GET_ALL_NOTICES_SUCCESS,
  TEACHER_GET_ALL_NOTICES_ERROR,
  TEACHER_ADD_NOTICE_BEGIN,
  TEACHER_ADD_NOTICE_SUCCESS,
  TEACHER_ADD_NOTICE_ERROR,
  TEACHER_DELETE_NOTICE_BEGIN,
  TEACHER_UPDATE_NOTICE_BEGIN,
  TEACHER_UPDATE_NOTICE_SUCCESS,
  TEACHER_UPDATE_NOTICE_ERROR,

} from "./action";

const reducer = (state, action) => {
  //Register user
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      isLogedIn: true,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  //Login User

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      isLogedIn: true,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      // alertText: action.payload.msg,
    };
  }

  //logOut user
  if (action.type === LOGOUT_BEGIN) {
    return {
      ...state,
      isLoading: false,
      token: "",
      user: "",
      isLogedIn: false,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting",
    };
  }

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

  // teacher get all notices begin
  if (action.type === TEACHER_GET_ALL_NOTICES_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  // teacher get all notices success
  if (action.type === TEACHER_GET_ALL_NOTICES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      teacherAllNotices: action.payload.allNotices,
      alertType: "success",
      alertText: "All notices!",
    };
  }

  // teacher get all notices error
  if (action.type === TEACHER_GET_ALL_NOTICES_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Error getting notices",
    };
  }

  //teacher add notice begin
  if (action.type === TEACHER_ADD_NOTICE_BEGIN) {
    return { ...state, isLoading: true };
  }

  //teacher add notice success
  if (action.type === TEACHER_ADD_NOTICE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Notice added! Redirecting",
    };
  }

  //teacher add notice error
  if (action.type === TEACHER_ADD_NOTICE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "hello",
    };
  }
  //teacher delete notice
  if (action.type === TEACHER_DELETE_NOTICE_BEGIN) {
    return { ...state, isLoading: true };
  }

  //teacher update notice begin
 if (action.type === TEACHER_UPDATE_NOTICE_BEGIN) {
  return {
    ...state,
    isLoading: true,
  };
}
//teacher update notice
if (action.type === TEACHER_UPDATE_NOTICE_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: "success",
    alertText: "Notice Updated",
  };
}

if (action.type === TEACHER_UPDATE_NOTICE_ERROR) {
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
