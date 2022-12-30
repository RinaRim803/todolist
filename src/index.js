import { combineReducers, createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom/client";
import logger from "redux-logger";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const MathReducer = (state = { result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
  }
  return state;
};

const UserReducer = (state = { name: "Max", age: 27 }, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }
  return state;
};
const myLogger = (store) => (next) => (action) => {
  //   console.log("Logged Action: ", action);
  next(action);
};
const store = createStore(
  combineReducers({ MathReducer, UserReducer }),
  {},
  applyMiddleware(logger)
);

store.subscribe(() => {
  //   console.log("State changed", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});
store.dispatch({
  type: "SET_AGE",
  payload: 30,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
