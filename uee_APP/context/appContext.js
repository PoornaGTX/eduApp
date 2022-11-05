import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
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
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_ERROR,
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
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: "",
  token: "",
  isLogedIn: false,
  subjects: [],
  grades: [],
  users: [],
  mySubscribeList: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "http://10.0.2.2:5000/api",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // logoutUser();
        console.log("====================================");
        console.log("axios error");
        console.log("====================================");
      }
      return Promise.reject(error);
    }
  );

  //register user

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/api/auth/register",
        currentUser
      );
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  //login

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/api/auth/login",
        currentUser
      );

      const { user, token } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      // AsyncStorage.setItem("user", JSON.stringify(user));
      // AsyncStorage.setItem("token", token);
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };

  const logOutUser = async () => {
    dispatch({ type: LOGOUT_BEGIN });
  };

  //ADD USER TO LOCAL STORAGE
  const addUserToLocalStorage = ({ user, token }) => {
    AsyncStorage.setItem("user", JSON.stringify(user));
    AsyncStorage.setItem("token", token);
  };
  //REMOVE USER FROM LOCAL STORAGE
  const removeUserFromLocalStorage = () => {
    AsyncStorage.removeItem("user");
    AsyncStorage.removeItem("token");
  };

  //add grade
  const addGrade = async (gradeData) => {
    dispatch({ type: ADD_GRADE_BEGIN });

    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/api/v1/admin/grades",
        gradeData
      );
      dispatch({
        type: ADD_GRADE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_GRADE_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };

  //add subject
  const addSubject = async (subjectdata) => {
    dispatch({ type: ADD_SUBJECT_BEGIN });

    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/api/v1/admin/",
        subjectdata
      );
      dispatch({
        type: ADD_SUBJECT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_SUBJECT_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };

  //get all Grades
  const getAllGrades = async () => {
    dispatch({ type: GET_GRADES_BEGIN });

    try {
      const response = await axios.get(
        "http://10.0.2.2:5000/api/v1/admin/grades"
      );
      const { AllGrades } = response.data;
      dispatch({
        type: GET_GRADES_SUCCESS,
        payload: { AllGrades },
      });
    } catch (error) {
      dispatch({
        type: GET_GRADES_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };

  //update subject
  const updateGrade = async (smongoGradeeID, gradeData) => {
    dispatch({ type: UPDATE_GRADE_BEGIN });

    try {
      const response = await axios.patch(
        `http://10.0.2.2:5000/api/v1/admin/grades/${smongoGradeeID}`,
        gradeData
      );
      dispatch({
        type: UPDATE_GRADE_SUCCESS,
        // payload: { AllSubjects },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_GRADE_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
    getAllGrades();
  };

  //get all subjects
  const getAllSubjects = async () => {
    dispatch({ type: GET_SUBJECTS_BEGIN });

    try {
      const response = await axios.get("http://10.0.2.2:5000/api/v1/admin/");
      const { AllSubjects } = response.data;
      dispatch({
        type: GET_SUBJECTS_SUCCESS,
        payload: { AllSubjects },
      });
    } catch (error) {
      dispatch({
        type: GET_SUBJECTS_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };

  //update subject
  const updateSubject = async (subjectID, subData) => {
    dispatch({ type: UPDATE_SUBJECT_BEGIN });

    try {
      const response = await axios.patch(
        `http://10.0.2.2:5000/api/v1/admin/${subjectID}`,
        subData
      );
      dispatch({
        type: UPDATE_SUBJECT_SUCCESS,
        // payload: { AllSubjects },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SUBJECT_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
    getAllSubjects();
  };

  //delete subject
  const deleteSubject = async (subjectID) => {
    dispatch({ type: DELETE_SUBJECT_BEGIN });

    try {
      const response = await axios.delete(
        `http://10.0.2.2:5000/api/v1/admin/${subjectID}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  //delete subject
  const deleteGrade = async (GradeIDMongo) => {
    dispatch({ type: DELETE_GRADE_BEGIN });

    try {
      const response = await axios.delete(
        `http://10.0.2.2:5000/api/v1/admin/grades/${GradeIDMongo}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  //get all Grades
  const getAllUsers = async () => {
    dispatch({ type: GET_ALL_USERS_BEGIN });

    try {
      const response = await axios.get("http://10.0.2.2:5000/api/v1/students");
      const { users } = response.data;
      const userId = state.user._id;
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: { users, userId },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_ERROR,
      });
    }
  };

  //subscribe handler
  //update subject
  const subscribeHandler = async (subData) => {
    console.log("here");
    dispatch({ type: SUBSCRIBE_TEACHER_BEGIN });
    try {
      const response = await axios.patch(
        `http://10.0.2.2:5000/api/v1/students/subscribe/${state.user._id}`,
        subData
      );
      console.log(response.data);
      getAllUsers();
      dispatch({
        type: SUBSCRIBE_TEACHER_SUCCESS,
        // payload: { AllSubjects },
        payload: { userID: state.user._id },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SUBSCRIBE_TEACHER_END,
        // payload: { msg: error.response.data.msg },
      });
    }
    // getAllSubjects();
  };

  //   //login user

  //   //get cart
  //   const getCart = async () => {
  //     dispatch({ type: GET_CART_BEGIN });

  //     try {
  //       const response = await authFetch.get("/Customers/cart");
  //       const { carts } = response.data;

  //       dispatch({
  //         type: GET_CART_SUCCESS,
  //         payload: { carts },
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: GET_CART_ERROR,
  //         // payload: { msg: error.response.data.msg },
  //       });
  //     }
  //   };

  //   //get all products
  //   const getAllProducts = async () => {
  //     dispatch({ type: GET_PRODUCTS_BEGIN });

  //     try {
  //       const response = await axios.get(
  //         "http://10.0.2.2:5000/api/Customers/Products"
  //       );
  //       const { products } = response.data;

  //       dispatch({
  //         type: GET_PRODUCTS_SUCCESS,
  //         payload: { products },
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: GET_CART_ERROR,
  //         // payload: { msg: error.response.data.msg },
  //       });
  //     }
  //   };

  //   //deleteCartitem
  //   const deleteCartitem = async (cartItemID) => {
  //     dispatch({ type: DELETE_TOCART_BEGIN });
  //     try {
  //       const response = await authFetch.delete(`/Customers/cart/${cartItemID}`);

  //       dispatch({
  //         type: DELETE_TOCART_SUCCESS,
  //       });
  //       getCart();
  //     } catch (error) {
  //       dispatch({
  //         type: DELETE_TOCART_ERROR,
  //         // payload: { msg: error.response.data.msg },
  //       });
  //     }
  //   };

  //   //get all products
  //   const getAllProjectDetails = async () => {
  //     dispatch({ type: GET_PROJECT_BEGIN });

  //     const email = state.user.email;

  //     try {
  //       const response = await axios.get(
  //         `http://10.0.2.2:5000/api/Projects/${email}`
  //       );
  //       const { project } = response.data;

  //       dispatch({
  //         type: GET_PROJECT_SUCCESS,
  //         payload: { project },
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: GET_PROJECT_ERROR,
  //         // payload: { msg: error.response.data.msg },
  //       });
  //     }
  //   };

  //   const addToOrder = async (cart, totalCart) => {
  //     dispatch({ type: CREATE_ORDER_BEGIN });

  //     let status;
  //     try {
  //       if (totalCart >= 100000) {
  //         status = "pending";
  //       } else {
  //         status = "approved";
  //       }
  //       const response = await authFetch.post("/order", {
  //         createdBy: state.user._id,
  //         cartproducts: cart,
  //         total: totalCart,
  //         status,
  //       });
  //       dispatch({
  //         type: CREATE_ORDER_SUCCESS,
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: CREATE_ORDER_ERROR,
  //         // payload: { msg: error.response.data.msg },
  //       });
  //     }
  //     getCart();
  //   };

  //   //get all products
  //   const getOrderSummery = async () => {
  //     dispatch({ type: GET_ORDER_BEGIN });

  //     try {
  //       const response = await authFetch.get("/order");
  //       const { Orders } = response.data;

  //       dispatch({
  //         type: GET_ORDER_SUCCESS,
  //         payload: { Orders },
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: GET_ORDER_ERROR,
  //         // payload: { msg: error.response.data.msg },
  //       });
  //     }
  //   };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
        addGrade,
        getAllSubjects,
        getAllGrades,
        updateSubject,
        deleteSubject,
        addSubject,
        updateGrade,
        deleteGrade,
        logOutUser,
        getAllUsers,
        subscribeHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
