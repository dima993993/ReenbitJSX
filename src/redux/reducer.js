import { messageAPI } from "../api/api";
import { usersData } from "../data/data";

const GET_CURRENT_USER = "FILTER_USERS";
const GET_TEXT_MESSAGE = "GET_TEXT_MESSAGE";
const ADD_MESSAGE_IN_PAGE = "ADD_MESSAGE_IN_PAGE";
const GET_TEXT_SEARCH = "GET_TEXT_SEARCH";
const AUTO_ANSWER = "AUTO_ANSWER";
const LOADING_MESSAGE = "LOADING_MESSAGE";
const DELETE_USER = "SAVE_MESSAGE_USER";
const ADD_USER = "ADD_USER";

const getUsersData = JSON.parse(localStorage.getItem("users"));

const initialState = {
  users: getUsersData === null ? usersData : getUsersData,
  currentUser: {},
  autoAnswer: {},
  textMessage: "",
  textSearch: "",
  loadingMessage: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT_MESSAGE: {
      return {
        ...state,
        textMessage: action.message,
      };
    }
    case ADD_MESSAGE_IN_PAGE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          message: [...state.currentUser.message, action.userMessage],
        },
      };
    }
    case GET_TEXT_SEARCH: {
      return {
        ...state,
        textSearch: action.text,
      };
    }
    case GET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.user,
      };
    }
    case AUTO_ANSWER: {
      localStorage.setItem("users", JSON.stringify(state.users));
      let newObj = {
        date: action.date,
        message: action.message,
        idUser: state.currentUser.id,
      };
      return {
        ...state,
        autoAnswer: newObj,
      };
    }
    case LOADING_MESSAGE: {
      return {
        ...state,
        loadingMessage: action.toggle,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== state.currentUser.id),
      };
    }
    case ADD_USER: {
      return {
        ...state,
        users: [state.currentUser, ...state.users],
      };
    }
    default:
      return state;
  }
};

// Action Creator

export const getTextMessage = (message) => ({
  type: GET_TEXT_MESSAGE,
  message,
});
export const setTextMessageObj = (userMessage) => ({
  type: ADD_MESSAGE_IN_PAGE,
  userMessage,
});
export const setTextSearch = (text) => ({ type: GET_TEXT_SEARCH, text });
export const getCurrentUser = (user) => ({ type: GET_CURRENT_USER, user });
export const setAutoMessage = (date, message) => ({
  type: AUTO_ANSWER,
  date,
  message,
});
export const deleteUserInArray = () => ({ type: DELETE_USER });
export const addUserInArray = () => ({ type: ADD_USER });
export const loadingForMessage = (toggle) => ({
  type: LOADING_MESSAGE,
  toggle,
});

// Thunk

export const getAutoMessage = (currentDate) => (dispatch) => {
  messageAPI().then((data) => {
    dispatch(setAutoMessage(currentDate, data.value));
  });
};

export default AppReducer;
