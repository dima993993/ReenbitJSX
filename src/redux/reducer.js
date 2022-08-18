import { messageAPI } from "../api/api";
import { usersData } from "../data/data";

const GET_USERS = "GET_USERS";
const GET_CURRENT_USER = "FILTER_USERS";
const GET_TEXT_MESSAGE = "GET_TEXT_MESSAGE";
const ADD_MESSAGE_IN_PAGE = "ADD_MESSAGE_IN_PAGE";
const GET_TEXT_SEARCH = "GET_TEXT_SEARCH";
const AUTO_ANSWER = "AUTO_ANSWER";
const LOADING_MESSAGE = "LOADING_MESSAGE";
const SAVE_MESSAGE_USER = "SAVE_MESSAGE_USER";

const getUsersData = localStorage.getItem("users");
const parseUsers = JSON.parse(getUsersData);

const initialState = {
  users: parseUsers === null ? usersData : parseUsers,
  currentUser: {},
  autoAnswer: {},
  textMessage: "",
  textSearch: "",
  loadingMessage: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
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
    case SAVE_MESSAGE_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === state.currentUser.id ? state.currentUser : user
        ),
      };
    }
    default:
      return state;
  }
};

// Action Creator
export const getUsers = (users) => ({ type: GET_USERS, users });
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
export const saveMessage = () => ({ type: SAVE_MESSAGE_USER });
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
