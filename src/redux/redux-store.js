import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./reducer";

let reducers = combineReducers({
  app: AppReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
