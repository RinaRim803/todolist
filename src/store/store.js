import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import user from "../reducers/userReducer";
import math from "../reducers/mathReducer";


const store = createStore(
  combineReducers({ math, user }),
  {},
  applyMiddleware(logger)
);

export default store;
