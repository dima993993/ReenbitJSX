import { usersData } from "../data/data";

const GET_CURRENT_USER = "FILTER_USERS";
const GET_TEXT_MESSAGE = "GET_TEXT_MESSAGE";
const ADD_MESSAGE_IN_PAGE = "ADD_MESSAGE_IN_PAGE";
const GET_TEXT_SEARCH = "GET_TEXT_SEARCH";

const initialState = {
  users: usersData,
  currentUser: {
    id: 2,
    name: "Bogdan",
    url: "https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg",
    message: [
      { date: "01.10.2021", message: "Hello, how are You?", idUser: 2 },
      { date: "01.10.2021", message: "I am fine, and You? ", idUser: 100 },
    ],
  },
  textMessage: "",
  textSearch: "",
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
      let date = new Date();
      let userObj = {
        date:
          date.getMonth() +
          "/" +
          date.getDate() +
          "/" +
          date.getFullYear() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes(),
        message: state.textMessage,
        idUser: 100,
      };
      return {
        ...state,
        currentUser: { ...state.currentUser.message, userObj },
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
    default:
      return state;
  }
};

// Action Creator
export const getTextMessage = (message) => ({
  type: GET_TEXT_MESSAGE,
  message,
});
export const setTextMessageObj = () => ({ type: ADD_MESSAGE_IN_PAGE });
export const setTextSearch = (text) => ({ type: GET_TEXT_SEARCH, text });
export const getCurrentUser = (user) => ({ type: GET_CURRENT_USER, user });

export default AppReducer;
