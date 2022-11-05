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
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_SUCCESS,
  SUBSCRIBE_TEACHER_BEGIN,
  SUBSCRIBE_TEACHER_END,
  SUBSCRIBE_TEACHER_SUCCESS,
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

  //get all users
  if (action.type === GET_ALL_USERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_ALL_USERS_SUCCESS) {
    // console.log(updatedUser, state.users);
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      users: action.payload.users,
      alertType: "success",
      alertText: "Success",
      mySubscribeList: action.payload.users.find(
        (user) => user._id === action.payload.userId
      ).subscribeIds,
    };
  }

  if (action.type === GET_ALL_USERS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "hello",
    };
  }

  //subscribe handler
  if (action.type === SUBSCRIBE_TEACHER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === SUBSCRIBE_TEACHER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Success",
    };
  }

  if (action.type === SUBSCRIBE_TEACHER_END) {
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
